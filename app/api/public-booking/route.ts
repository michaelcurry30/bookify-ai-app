import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { business_id, client_name, client_phone, start_time, staff_id } = await req.json()

  if (!business_id || !client_name || !client_phone || !start_time) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (staff_id) {
    const { data: conflict } = await supabaseAdmin
      .from('appointments')
      .select('id')
      .eq('business_id', business_id)
      .eq('staff_id', staff_id)
      .eq('start_time', start_time)
      .neq('status', 'cancelled')
      .maybeSingle()

    if (conflict) {
      return NextResponse.json(
        { error: 'That time is already taken. Please pick a different time.' },
        { status: 409 }
      )
    }
  } else {
    const { count: staffCount } = await supabaseAdmin
      .from('staff')
      .select('id', { count: 'exact', head: true })
      .eq('business_id', business_id)

    const { count: bookedCount } = await supabaseAdmin
      .from('appointments')
      .select('id', { count: 'exact', head: true })
      .eq('business_id', business_id)
      .eq('start_time', start_time)
      .neq('status', 'cancelled')

    const capacity = staffCount && staffCount > 0 ? staffCount : 1

    if ((bookedCount || 0) >= capacity) {
      return NextResponse.json(
        { error: 'That time is fully booked. Please pick a different time.' },
        { status: 409 }
      )
    }
  }

  const { data, error } = await supabaseAdmin
    .from('appointments')
    .insert({
      business_id,
      client_name,
      client_phone,
      start_time,
      staff_id: staff_id || null,
      status: 'confirmed',
    })
    .select()
    .single()

  if (error) {
    console.error('public-booking error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, appointmentId: data.id })
}

export async function GET(req: NextRequest) {
  const businessId = req.nextUrl.searchParams.get('business_id')

  if (!businessId) {
    return NextResponse.json({ error: 'Missing business_id' }, { status: 400 })
  }

  const { data: business } = await supabaseAdmin
    .from('businesses')
    .select('name')
    .eq('id', businessId)
    .single()

  const { data: staff } = await supabaseAdmin
    .from('staff')
    .select()
    .eq('business_id', businessId)
    .order('name', { ascending: true })

  return NextResponse.json({
    business: business || null,
    staff: staff || [],
  })
}
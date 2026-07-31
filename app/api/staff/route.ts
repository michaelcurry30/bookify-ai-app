import { getCurrentBusiness } from '@/lib/get-current-business'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const business = await getCurrentBusiness()

  if (!business) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { data } = await supabaseAdmin
    .from('staff')
    .select()
    .eq('business_id', business.id)
    .order('name', { ascending: true })

  return NextResponse.json({ staff: data || [] })
}

export async function POST(req: NextRequest) {
  const business = await getCurrentBusiness()

  if (!business) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { name, photo_url } = await req.json()

  const { error } = await supabaseAdmin.from('staff').insert({
    business_id: business.id,
    name,
    photo_url: photo_url || null,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
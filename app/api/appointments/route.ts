import { createServerClient } from '@supabase/ssr'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll() {},
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { data: business } = await supabaseAdmin
    .from('businesses')
    .select()
    .eq('user_id', user.id)
    .single()

  if (!business) {
    return NextResponse.json({ appointments: [] })
  }

  const { data } = await supabaseAdmin
    .from('appointments')
    .select('*, staff:staff_id(name)')
    .eq('business_id', business.id)
    .order('start_time', { ascending: true })

  return NextResponse.json({ appointments: data || [] })
}
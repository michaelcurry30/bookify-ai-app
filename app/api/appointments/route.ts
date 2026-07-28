import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data } = await supabaseAdmin
    .from('appointments')
    .select('*, staff:staff_id(name)')
    .order('start_time', { ascending: true })

  return NextResponse.json({ appointments: data || [] })
}
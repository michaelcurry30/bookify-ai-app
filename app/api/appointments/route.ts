import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data } = await supabaseAdmin
    .from('appointments')
    .select()
    .order('start_time', { ascending: true })

  return NextResponse.json({ appointments: data || [] })
}
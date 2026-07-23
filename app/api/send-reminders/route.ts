import { supabaseAdmin as supabase } from '@/lib/supabase-admin'
import { sendSMS } from '@/lib/sms'
import { NextResponse } from 'next/server'

export async function GET() {
  const in24h = new Date(Date.now() + 24 * 60 * 60 * 1000)
  const in23h = new Date(Date.now() + 23 * 60 * 60 * 1000)

  const { data: appointments } = await supabase
    .from('appointments')
    .select()
    .eq('status', 'confirmed')
    .gte('start_time', in23h.toISOString())
    .lte('start_time', in24h.toISOString())

  for (const appt of appointments || []) {
    await sendSMS(
      appt.client_phone,
      `Reminder: appointment tomorrow at ${appt.start_time}. Reply CANCEL if you can't make it.`
    )
  }

  return NextResponse.json({ sent: appointments?.length || 0 })
}
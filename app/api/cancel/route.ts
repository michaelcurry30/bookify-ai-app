import { supabaseAdmin as supabase } from '@/lib/supabase-admin'
import { sendSMS } from '@/lib/sms'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { appointmentId } = await req.json()

  const { data: appointment } = await supabase
    .from('appointments')
    .update({ status: 'cancelled' })
    .eq('id', appointmentId)
    .select()
    .single()

  const { data: waitlistEntry } = await supabase
    .from('waitlist')
    .select()
    .eq('business_id', appointment.business_id)
    .order('added_at', { ascending: true })
    .limit(1)
    .single()

  if (waitlistEntry) {
    await sendSMS(
      waitlistEntry.client_phone,
      `A slot just opened at ${appointment.start_time}. Reply YES to claim it!`
    )
    await supabase.from('waitlist').delete().eq('id', waitlistEntry.id)
  }

  return NextResponse.json({ ok: true })
}
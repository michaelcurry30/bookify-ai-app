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

  // First, look for someone specifically waiting for this staff member
  let { data: waitlistEntry } = await supabase
    .from('waitlist')
    .select()
    .eq('business_id', appointment.business_id)
    .eq('staff_id', appointment.staff_id)
    .order('added_at', { ascending: true })
    .limit(1)
    .maybeSingle()

  // If nobody's waiting specifically for this staff member, fall back to
  // anyone on the waitlist who didn't request a specific person
  if (!waitlistEntry) {
    const fallback = await supabase
      .from('waitlist')
      .select()
      .eq('business_id', appointment.business_id)
      .is('staff_id', null)
      .order('added_at', { ascending: true })
      .limit(1)
      .maybeSingle()
    waitlistEntry = fallback.data
  }

  if (waitlistEntry) {
    await sendSMS(
      waitlistEntry.client_phone,
      `A slot just opened at ${appointment.start_time}. Reply YES to claim it!`
    )
    await supabase.from('waitlist').delete().eq('id', waitlistEntry.id)
  }

  return NextResponse.json({ ok: true })
}
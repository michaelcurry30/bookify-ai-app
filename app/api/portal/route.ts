import { stripe } from '@/lib/stripe'
import { supabaseAdmin as supabase } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { data: business } = await supabase
    .from('businesses')
    .select()
    .limit(1)
    .single()

  if (!business?.stripe_customer_id) {
    return NextResponse.json({ error: 'No Stripe customer found' }, { status: 400 })
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: business.stripe_customer_id,
    return_url: `${req.nextUrl.origin}/dashboard`,
  })

  return NextResponse.json({ url: session.url })
}
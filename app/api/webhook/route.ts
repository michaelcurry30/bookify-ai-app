import { stripe } from '@/lib/stripe'
import { supabaseAdmin as supabase } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  const event = stripe.webhooks.constructEvent(
    body, sig, process.env.STRIPE_WEBHOOK_SECRET!
  )

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any
    await supabase.from('businesses')
      .update({ stripe_customer_id: session.customer })
      .eq('email', session.customer_details.email)
  }

  return NextResponse.json({ received: true })
}
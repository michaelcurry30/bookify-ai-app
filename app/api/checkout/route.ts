import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

const PRICE_MAP: Record<string, string | undefined> = {
  starter: process.env.STRIPE_PRICE_STARTER,
  growth: process.env.STRIPE_PRICE_GROWTH,
  premium: process.env.STRIPE_PRICE_PREMIUM,
}

export async function POST(req: NextRequest) {
  const { plan } = await req.json()
  const priceId = PRICE_MAP[plan]

  if (!priceId) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: 14,
      trial_settings: {
        end_behavior: { missing_payment_method: 'cancel' },
      },
    },
    payment_method_collection: 'if_required',
    success_url: `${req.nextUrl.origin}/dashboard?success=true`,
    cancel_url: `${req.nextUrl.origin}/pricing`,
  })

  return NextResponse.json({ url: session.url })
}
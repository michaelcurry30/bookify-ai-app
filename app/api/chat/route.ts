import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are the support assistant for Bookify AI, a SaaS product for appointment-based businesses (salons, med spas, chiropractic, dental, and other medical/beauty clinics).

What Bookify AI does:
- Sends automatic SMS + email reminders before appointments to reduce no-shows
- When an appointment is cancelled, automatically texts the business's waitlist so the slot gets refilled fast
- Businesses can assign staff members to appointments and waitlist requests, so cancellations get matched to the right stylist/provider first
- Includes a dashboard showing today's schedule and revenue recovered
- Customers can cancel their own subscription anytime via the "Manage subscription" button on the dashboard

Pricing:
- Starter: $39/mo — 1 location, up to 300 appointments/mo, SMS + email reminders, basic waitlist auto-fill
- Growth: $89/mo — 1 location, up to 1,000 appointments/mo, priority waitlist auto-fill, deposit/no-show fee collection, email support
- Premium: $129/mo — up to 5 locations, unlimited appointments, everything in Growth, location-level reporting
- Every plan includes a 14-day free trial, no credit card required to start

Answer questions clearly and briefly, in a friendly, helpful tone. If you don't know the answer to something specific (like a particular customer's account details), tell them to email support rather than guessing.`

export async function POST(req: NextRequest) {
  const { message, history } = await req.json()

  const messages = [
    ...(history || []),
    { role: 'user', content: message }
  ]

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages,
    }),
  })

  const data = await response.json()
  const reply = data.content?.[0]?.text || "Sorry, I couldn't process that. Please try again."

  return NextResponse.json({ reply })
}
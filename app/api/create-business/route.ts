import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { userId, businessName, email } = await req.json()

  const { error } = await supabaseAdmin.from('businesses').insert({
    user_id: userId,
    name: businessName,
    email,
    plan: 'starter',
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
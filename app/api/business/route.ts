import { getCurrentBusiness } from '@/lib/get-current-business'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const business = await getCurrentBusiness()

  if (!business) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  return NextResponse.json({ business })
}

export async function PATCH(req: NextRequest) {
  const business = await getCurrentBusiness()

  if (!business) {
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 })
  }

  const { name, email } = await req.json()

  const { error } = await supabaseAdmin
    .from('businesses')
    .update({ name, email })
    .eq('id', business.id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
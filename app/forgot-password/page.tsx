"use client"

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    setLoading(false)

    if (resetError) {
      setError(resetError.message)
    } else {
      setSent(true)
    }
  }

  const inputStyle = {
    width: '100%', padding: '10px 12px', borderRadius: '6px',
    border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5',
    fontSize: '14px', outline: 'none',
  }

  return (
    <div style={{
      minHeight: '100vh', width: '100%', background: '#0B0E17',
      backgroundImage: 'radial-gradient(ellipse 700px 400px at 10% -5%, rgba(109,107,255,0.10), transparent), radial-gradient(ellipse 700px 400px at 95% 5%, rgba(34,211,238,0.06), transparent)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '24px',
    }}>
      <div style={{
        width: '100%', maxWidth: '400px', padding: '32px', background: '#141926',
        border: '1px solid #242B3D', borderRadius: '12px', color: '#EDEFF5',
      }}>
        <h1 style={{ fontSize: '22px', marginBottom: '10px', fontWeight: 700 }}>Reset your password</h1>

        {sent ? (
          <p style={{ color: '#8891A8', fontSize: '14px', marginTop: '16px' }}>
            If an account exists for {email}, we've sent a password reset link. Check your inbox.
          </p>
        ) : (
          <>
            <p style={{ color: '#8891A8', fontSize: '13.5px', marginBottom: '20px' }}>
              Enter your email and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  required placeholder="you@business.com" style={inputStyle} />
              </div>
              {error && <p style={{ color: '#FB7185', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '12px', borderRadius: '6px', border: 'none',
                background: '#6D6BFF', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer',
              }}>
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </form>
          </>
        )}

        <p style={{ marginTop: '20px', fontSize: '13px', color: '#8891A8', textAlign: 'center' }}>
          <a href="/login" style={{ color: '#7DD3FC' }}>Back to login</a>
        </p>
      </div>
    </div>
  )
}
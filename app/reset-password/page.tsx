"use client"

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

export default function ResetPassword() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (updateError) {
      setError(updateError.message)
    } else {
      setDone(true)
      setTimeout(() => router.push('/dashboard'), 2000)
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
        <h1 style={{ fontSize: '22px', marginBottom: '20px', fontWeight: 700 }}>Set a new password</h1>

        {done ? (
          <p style={{ color: '#34D399', fontSize: '14px' }}>Password updated! Redirecting to your dashboard...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }}>New password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                required minLength={6} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }}>Confirm password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                required style={inputStyle} />
            </div>
            {error && <p style={{ color: '#FB7185', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}
            <button type="submit" disabled={loading} style={{
              width: '100%', padding: '12px', borderRadius: '6px', border: 'none',
              background: '#6D6BFF', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer',
            }}>
              {loading ? 'Saving...' : 'Update password'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
"use client"

import { useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (loginError) {
      setError(loginError.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div style={{
      maxWidth: '400px',
      margin: '80px auto',
      padding: '32px',
      background: '#141926',
      border: '1px solid #242B3D',
      borderRadius: '12px',
      color: '#EDEFF5',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '22px', marginBottom: '24px' }}>Log in</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5' }}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5' }}
          />
        </div>
        {error && <p style={{ color: '#FB7185', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%', padding: '12px', borderRadius: '6px', border: 'none',
            background: '#6D6BFF', color: '#fff', fontWeight: 600, cursor: 'pointer'
          }}
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '13px', color: '#8891A8' }}>
        Don't have an account? <a href="/signup" style={{ color: '#7DD3FC' }}>Sign up</a>
      </p>
    </div>
  )
}
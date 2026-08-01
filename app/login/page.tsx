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
      minHeight: '100vh',
      width: '100%',
      background: '#0B0E17',
      backgroundImage: 'radial-gradient(ellipse 700px 400px at 10% -5%, rgba(109,107,255,0.10), transparent), radial-gradient(ellipse 700px 400px at 95% 5%, rgba(34,211,238,0.06), transparent)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      padding: '24px'
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #0B0E17 inset !important;
          -webkit-text-fill-color: #EDEFF5 !important;
          caret-color: #EDEFF5;
          border: 1px solid #242B3D !important;
        }
      `}} />
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '32px',
        background: '#141926',
        border: '1px solid #242B3D',
        borderRadius: '12px',
        color: '#EDEFF5',
        boxShadow: '0 12px 48px rgba(0,0,0,0.4)'
      }}>
        <h1 style={{ fontSize: '22px', marginBottom: '24px', fontWeight: 700 }}>Log in</h1>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5', fontSize: '14px', outline: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5', fontSize: '14px', outline: 'none' }}
            />
          </div>
          {error && <p style={{ color: '#FB7185', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '12px', borderRadius: '6px', border: 'none',
              background: '#6D6BFF', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <p style={{ marginTop: '12px', fontSize: '13px', textAlign: 'center' }}>
          <a href="/forgot-password" style={{ color: '#7DD3FC' }}>Forgot password?</a>
        </p>
        <p style={{ marginTop: '20px', fontSize: '13px', color: '#8891A8', textAlign: 'center' }}>
          Don't have an account? <a href="/signup" style={{ color: '#7DD3FC' }}>Sign up</a>
        </p>
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Settings() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [businessId, setBusinessId] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetch('/api/business')
      .then(res => {
        if (res.status === 401) { router.push('/login'); return null }
        return res.json()
      })
      .then(data => {
        if (data?.business) {
          setName(data.business.name || '')
          setEmail(data.business.email || '')
          setBusinessId(data.business.id || '')
        }
        setLoading(false)
      })
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setSaved(false)
    setError('')

    const res = await fetch('/api/business', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })

    setSaving(false)

    if (res.ok) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } else {
      setError('Could not save changes. Please try again.')
    }
  }

  const inputStyle = {
    width: '100%', padding: '10px 12px', borderRadius: '6px',
    border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5',
    fontSize: '14px', outline: 'none',
  }
  const labelStyle = { display: 'block', fontSize: '13px', marginBottom: '6px', color: '#8891A8' }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#0B0E17', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8891A8', fontFamily: 'sans-serif' }}>
        Loading...
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0B0E17',
      backgroundImage: 'radial-gradient(ellipse 700px 400px at 10% -5%, rgba(109,107,255,0.10), transparent), radial-gradient(ellipse 700px 400px at 95% 5%, rgba(34,211,238,0.06), transparent)',
      color: '#EDEFF5',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ borderBottom: '1px solid #242B3D', padding: '18px 0', marginBottom: '32px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span style={{ width: '22px', height: '22px', background: '#6D6BFF', borderRadius: '6px', display: 'inline-block', boxShadow: '0 0 16px rgba(109,107,255,0.5)' }} />
            <span style={{ fontWeight: 800, fontSize: '18px' }}>Bookify AI</span>
          </div>
          <a href="/dashboard" style={{ color: '#8891A8', fontSize: '13.5px', textDecoration: 'none' }}>← Back to dashboard</a>
        </div>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px 60px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px' }}>Settings</h1>

        <form onSubmit={handleSave} style={{
          background: '#141926', border: '1px solid #242B3D', borderRadius: '10px', padding: '24px',
        }}>
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Business name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Contact email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          </div>

          {businessId && (
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Your booking link</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <code style={{
                  background: '#0B0E17', border: '1px solid #242B3D', borderRadius: '6px',
                  padding: '10px 12px', fontSize: '12.5px', color: '#7DD3FC', flex: 1,
                  overflowX: 'auto', whiteSpace: 'nowrap',
                }}>
                  {typeof window !== 'undefined' ? `${window.location.origin}/book/${businessId}` : ''}
                </code>
                <button type="button" onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/book/${businessId}`)
                  alert('Copied!')
                }} style={{
                  background: '#6D6BFF', color: '#fff', padding: '10px 16px', borderRadius: '6px',
                  border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
                }}>Copy</button>
              </div>
            </div>
          )}

          {error && <p style={{ color: '#FB7185', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}
          {saved && <p style={{ color: '#34D399', fontSize: '13px', marginBottom: '16px' }}>Saved!</p>}

          <button type="submit" disabled={saving} style={{
            width: '100%', padding: '12px', borderRadius: '6px', border: 'none',
            background: '#6D6BFF', color: '#fff', fontWeight: 600, fontSize: '14px', cursor: 'pointer',
            boxShadow: '0 0 20px rgba(109,107,255,0.35)',
          }}>
            {saving ? 'Saving...' : 'Save changes'}
          </button>
        </form>

        <div style={{
          marginTop: '20px', background: '#141926', border: '1px solid #242B3D',
          borderRadius: '10px', padding: '20px',
        }}>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Password</div>
          <div style={{ fontSize: '13px', color: '#8891A8', marginBottom: '14px' }}>
            Need to change your password?
          </div>
          <a href="/forgot-password" style={{
            display: 'inline-block', color: '#7DD3FC', fontSize: '13px', textDecoration: 'underline',
          }}>Reset password</a>
        </div>
      </div>
    </div>
  )
}
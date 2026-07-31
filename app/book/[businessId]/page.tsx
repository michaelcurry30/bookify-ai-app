"use client"

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function BookingPage() {
  const params = useParams()
  const businessId = params.businessId as string

  const [businessName, setBusinessName] = useState('')
  const [staff, setStaff] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [bookedApptId, setBookedApptId] = useState('')
  const [cancelling, setCancelling] = useState(false)
  const [cancelled, setCancelled] = useState(false)

  const [form, setForm] = useState({
    client_name: '', client_phone: '', start_time: '', staff_id: ''
  })

  useEffect(() => {
    fetch(`/api/public-booking?business_id=${businessId}`)
      .then(res => res.json())
      .then(data => {
        if (data.business) setBusinessName(data.business.name)
        setStaff(data.staff || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [businessId])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    const res = await fetch('/api/public-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ business_id: businessId, ...form }),
    })

    setSubmitting(false)

    if (res.ok) {
      const data = await res.json()
      setBookedApptId(data.appointmentId || '')
      setSubmitted(true)
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error || 'Something went wrong booking your appointment. Please try again.')
    }
  }

  const inputStyle = {
    width: '100%', padding: '11px 13px', borderRadius: '8px',
    border: '1px solid #242B3D', backgroundColor: '#0B0E17', color: '#EDEFF5',
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

  async function handleCancel() {
    setCancelling(true)
    const res = await fetch('/api/cancel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appointmentId: bookedApptId }),
    })
    setCancelling(false)
    if (res.ok) setCancelled(true)
  }

  if (submitted) {
    return (
      <div style={{
        minHeight: '100vh', backgroundColor: '#0B0E17', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: 'sans-serif', padding: '24px',
      }}>
        <div style={{
          maxWidth: '440px', width: '100%', textAlign: 'center', padding: '40px 32px',
          background: '#141926', border: '1px solid #242B3D', borderRadius: '12px', color: '#EDEFF5',
        }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: cancelled ? 'rgba(251,113,133,0.15)' : 'rgba(52,211,153,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
            fontSize: '28px', color: cancelled ? '#FB7185' : '#34D399',
          }}>{cancelled ? '✕' : '✓'}</div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>
            {cancelled ? 'Appointment cancelled' : "You're booked!"}
          </h1>
          <p style={{ color: '#8891A8', fontSize: '14px', marginBottom: cancelled ? 0 : '24px' }}>
            {cancelled
              ? "Your appointment has been cancelled. We've let the business know."
              : `${businessName} will send you a reminder before your appointment. See you then!`}
          </p>
          {!cancelled && bookedApptId && (
            <button onClick={handleCancel} disabled={cancelling} style={{
              background: 'transparent', color: '#FB7185', padding: '10px 18px', borderRadius: '6px',
              border: '1px solid #242B3D', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
            }}>
              {cancelling ? 'Cancelling...' : 'Cancel this appointment'}
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0B0E17',
      backgroundImage: 'radial-gradient(ellipse 700px 400px at 10% -5%, rgba(109,107,255,0.10), transparent), radial-gradient(ellipse 700px 400px at 95% 5%, rgba(34,211,238,0.06), transparent)',
      fontFamily: 'sans-serif',
      padding: '60px 24px',
    }}>
      <div style={{ maxWidth: '460px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '22px', height: '22px', background: '#6D6BFF', borderRadius: '6px',
            display: 'inline-block', boxShadow: '0 0 16px rgba(109,107,255,0.5)', marginBottom: '14px',
          }} />
          <h1 style={{ color: '#EDEFF5', fontSize: '22px', fontWeight: 800 }}>
            {businessName || 'Book an appointment'}
          </h1>
          <p style={{ color: '#8891A8', fontSize: '13.5px', marginTop: '6px' }}>Pick a time that works for you</p>
        </div>

        <form onSubmit={handleSubmit} style={{
          background: '#141926', border: '1px solid #242B3D', borderRadius: '12px',
          padding: '28px', boxShadow: '0 12px 48px rgba(0,0,0,0.4)',
        }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Your name</label>
            <input type="text" value={form.client_name}
              onChange={(e) => setForm({ ...form, client_name: e.target.value })}
              required style={inputStyle as any} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Phone number</label>
            <input type="tel" value={form.client_phone}
              onChange={(e) => setForm({ ...form, client_phone: e.target.value })}
              placeholder="+15551234567" required style={inputStyle as any} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Date &amp; time</label>
            <input type="datetime-local" value={form.start_time}
              onChange={(e) => setForm({ ...form, start_time: e.target.value })}
              required style={inputStyle as any} />
          </div>

          {staff.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Who would you like to see?</label>
              <select value={form.staff_id}
                onChange={(e) => setForm({ ...form, staff_id: e.target.value })}
                style={inputStyle as any}>
                <option value="">No preference</option>
                {staff.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
          )}

          {error && <p style={{ color: '#FB7185', fontSize: '13px', marginBottom: '16px' }}>{error}</p>}

          <button type="submit" disabled={submitting} style={{
            width: '100%', padding: '13px', borderRadius: '8px', border: 'none',
            background: '#6D6BFF', color: '#fff', fontWeight: 600, fontSize: '14.5px',
            cursor: 'pointer', boxShadow: '0 0 20px rgba(109,107,255,0.35)',
          }}>
            {submitting ? 'Booking...' : 'Book appointment'}
          </button>

          <p style={{ marginTop: '16px', fontSize: '11.5px', color: '#8891A8', textAlign: 'center', lineHeight: 1.5 }}>
            By booking, you agree to receive appointment reminder texts. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
          </p>
        </form>
      </div>
    </div>
  )
}

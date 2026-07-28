"use client"

import { useEffect, useState } from 'react'


export default function Dashboard() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  fetch('/api/appointments')
    .then(res => res.json())
    .then(data => setAppointments(data.appointments || []))
}, [])

  const recovered = appointments
    .filter(a => a.status === 'filled')
    .reduce((sum, a) => sum + (a.ticket_price || 0), 0)

  async function openPortal() {
    setLoading(true)
    const res = await fetch('/api/portal', { method: 'POST' })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      alert('Could not open subscription management. Try again shortly.')
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Today's schedule</h1>
        <button
          onClick={openPortal}
          disabled={loading}
          style={{
            background: '#6D6BFF',
            color: '#fff',
            padding: '10px 18px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600
          }}
        >
          {loading ? 'Opening...' : 'Manage subscription'}
        </button>
      </div>
      <p style={{ marginBottom: '24px' }}>Recovered this week: ${recovered}</p>
      <table style={{ width: '100%' }}>
        <tbody>
          {appointments.map(a => (
            <tr key={a.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '8px 0' }}>{a.start_time}</td>
              <td>{a.client_name}</td>
<td>{a.staff?.name || 'Unassigned'}</td>
<td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
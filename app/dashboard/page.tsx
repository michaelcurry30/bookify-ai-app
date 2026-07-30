"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [appointments, setAppointments] = useState<any[]>([])
  const [staff, setStaff] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const [showStaffForm, setShowStaffForm] = useState(false)
  const router = useRouter()

  const [newAppt, setNewAppt] = useState({
    client_name: '', client_phone: '', start_time: '', ticket_price: '', staff_id: ''
  })
  const [newStaffName, setNewStaffName] = useState('')
  const [savingAppt, setSavingAppt] = useState(false)
  const [savingStaff, setSavingStaff] = useState(false)

  function loadData() {
    setFetching(true)
    Promise.all([
      fetch('/api/appointments').then(res => {
        if (res.status === 401) { router.push('/login'); return null }
        return res.json()
      }),
      fetch('/api/staff').then(res => {
        if (res.status === 401) return null
        return res.json()
      }),
    ]).then(([apptData, staffData]) => {
      if (apptData) setAppointments(apptData.appointments || [])
      if (staffData) setStaff(staffData.staff || [])
      setFetching(false)
    })
  }

  useEffect(() => { loadData() }, [])

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

  async function handleAddAppointment(e: React.FormEvent) {
    e.preventDefault()
    setSavingAppt(true)
    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAppt),
    })
    setSavingAppt(false)
    if (res.ok) {
      setNewAppt({ client_name: '', client_phone: '', start_time: '', ticket_price: '', staff_id: '' })
      setShowAppointmentForm(false)
      loadData()
    } else {
      alert('Could not save appointment. Please try again.')
    }
  }

  async function handleAddStaff(e: React.FormEvent) {
    e.preventDefault()
    setSavingStaff(true)
    const res = await fetch('/api/staff', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newStaffName }),
    })
    setSavingStaff(false)
    if (res.ok) {
      setNewStaffName('')
      setShowStaffForm(false)
      loadData()
    } else {
      alert('Could not save staff member. Please try again.')
    }
  }

  const statusColors: Record<string, { bg: string; text: string }> = {
    confirmed: { bg: 'rgba(34,211,238,0.1)', text: '#22D3EE' },
    cancelled: { bg: 'rgba(251,113,133,0.1)', text: '#FB7185' },
    filled: { bg: 'rgba(52,211,153,0.1)', text: '#34D399' },
    completed: { bg: 'rgba(136,145,168,0.15)', text: '#8891A8' },
  }

  const inputStyle = {
    width: '100%', padding: '9px 11px', borderRadius: '6px',
    border: '1px solid #242B3D', background: '#0B0E17', color: '#EDEFF5',
    fontSize: '13.5px', outline: 'none',
  }
  const labelStyle = { display: 'block', fontSize: '12px', marginBottom: '5px', color: '#8891A8' }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0B0E17',
      backgroundImage: 'radial-gradient(ellipse 700px 400px at 10% -5%, rgba(109,107,255,0.10), transparent), radial-gradient(ellipse 700px 400px at 95% 5%, rgba(34,211,238,0.06), transparent)',
      color: '#EDEFF5',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ borderBottom: '1px solid #242B3D', padding: '18px 0', marginBottom: '32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span style={{ width: '22px', height: '22px', background: '#6D6BFF', borderRadius: '6px', display: 'inline-block', boxShadow: '0 0 16px rgba(109,107,255,0.5)' }} />
            <span style={{ fontWeight: 800, fontSize: '18px' }}>Bookify AI</span>
          </div>
          <button onClick={openPortal} disabled={loading} style={{
            background: '#6D6BFF', color: '#fff', padding: '10px 18px', borderRadius: '6px',
            border: 'none', cursor: 'pointer', fontSize: '13.5px', fontWeight: 600,
            boxShadow: '0 0 20px rgba(109,107,255,0.35)',
          }}>
            {loading ? 'Opening...' : 'Manage subscription'}
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <h1 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.01em' }}>Today's schedule</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setShowStaffForm(!showStaffForm)} style={{
              background: 'transparent', color: '#EDEFF5', padding: '9px 16px', borderRadius: '6px',
              border: '1px solid #242B3D', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
            }}>
              + Add staff
            </button>
            <button onClick={() => setShowAppointmentForm(!showAppointmentForm)} style={{
              background: '#6D6BFF', color: '#fff', padding: '9px 16px', borderRadius: '6px',
              border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
            }}>
              + Add appointment
            </button>
          </div>
        </div>

        {showStaffForm && (
          <form onSubmit={handleAddStaff} style={{
            background: '#141926', border: '1px solid #242B3D', borderRadius: '10px',
            padding: '20px', marginTop: '20px', display: 'flex', gap: '12px', alignItems: 'flex-end',
          }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Staff member name</label>
              <input
                type="text" value={newStaffName} onChange={(e) => setNewStaffName(e.target.value)}
                required style={inputStyle as any}
              />
            </div>
            <button type="submit" disabled={savingStaff} style={{
              background: '#6D6BFF', color: '#fff', padding: '9px 18px', borderRadius: '6px',
              border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, height: '38px',
            }}>
              {savingStaff ? 'Saving...' : 'Save'}
            </button>
          </form>
        )}

        {showAppointmentForm && (
          <form onSubmit={handleAddAppointment} style={{
            background: '#141926', border: '1px solid #242B3D', borderRadius: '10px',
            padding: '20px', marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px',
          }}>
            <div>
              <label style={labelStyle}>Client name</label>
              <input type="text" value={newAppt.client_name}
                onChange={(e) => setNewAppt({ ...newAppt, client_name: e.target.value })}
                required style={inputStyle as any} />
            </div>
            <div>
              <label style={labelStyle}>Client phone</label>
              <input type="tel" value={newAppt.client_phone}
                onChange={(e) => setNewAppt({ ...newAppt, client_phone: e.target.value })}
                placeholder="+15551234567" required style={inputStyle as any} />
            </div>
            <div>
              <label style={labelStyle}>Date &amp; time</label>
              <input type="datetime-local" value={newAppt.start_time}
                onChange={(e) => setNewAppt({ ...newAppt, start_time: e.target.value })}
                required style={inputStyle as any} />
            </div>
            <div>
              <label style={labelStyle}>Ticket price ($)</label>
              <input type="number" value={newAppt.ticket_price}
                onChange={(e) => setNewAppt({ ...newAppt, ticket_price: e.target.value })}
                style={inputStyle as any} />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={labelStyle}>Staff member (optional)</label>
              <select value={newAppt.staff_id}
                onChange={(e) => setNewAppt({ ...newAppt, staff_id: e.target.value })}
                style={inputStyle as any}>
                <option value="">No preference</option>
                {staff.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <button type="submit" disabled={savingAppt} style={{
                background: '#6D6BFF', color: '#fff', padding: '10px 18px', borderRadius: '6px',
                border: 'none', cursor: 'pointer', fontSize: '13.5px', fontWeight: 600, width: '100%',
              }}>
                {savingAppt ? 'Saving...' : 'Save appointment'}
              </button>
            </div>
          </form>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '24px', marginBottom: '32px' }}>
          <div style={{ background: '#141926', border: '1px solid #242B3D', borderRadius: '10px', padding: '20px' }}>
            <div style={{ fontSize: '12px', color: '#8891A8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Recovered this week</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#34D399', marginTop: '6px', textShadow: '0 0 14px rgba(52,211,153,0.35)' }}>${recovered}</div>
          </div>
          <div style={{ background: '#141926', border: '1px solid #242B3D', borderRadius: '10px', padding: '20px' }}>
            <div style={{ fontSize: '12px', color: '#8891A8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total appointments</div>
            <div style={{ fontSize: '28px', fontWeight: 800, marginTop: '6px' }}>{appointments.length}</div>
          </div>
        </div>

        <div style={{ background: '#141926', border: '1px solid #242B3D', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '150px 1fr 140px 100px 90px', columnGap: '16px', padding: '14px 20px',
            borderBottom: '1px solid #242B3D', fontSize: '12px', fontWeight: 700, color: '#8891A8',
            textTransform: 'uppercase', letterSpacing: '0.04em',
          }}>
            <div>Time</div>
            <div>Client</div>
            <div>Staff</div>
            <div>Status</div>
            <div style={{ textAlign: 'right' }}>Ticket</div>
          </div>

          {fetching && (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: '#8891A8', fontSize: '14px' }}>Loading...</div>
          )}

          {!fetching && appointments.length === 0 && (
            <div style={{ padding: '32px 20px', textAlign: 'center', color: '#8891A8', fontSize: '14px' }}>
              No appointments yet. Click "+ Add appointment" above to create your first one.
            </div>
          )}

          {appointments.map((a, i) => {
            const colors = statusColors[a.status] || statusColors.confirmed
            return (
              <div key={a.id} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr 140px 100px 90px', columnGap: '16px', padding: '14px 20px',
                borderBottom: i === appointments.length - 1 ? 'none' : '1px solid #242B3D',
                fontSize: '13.5px', alignItems: 'center',
              }}>
                <div style={{ color: '#8891A8', fontFamily: 'monospace', fontSize: '12.5px' }}>
                  {a.start_time ? new Date(a.start_time).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }) : '—'}
                </div>
                <div>{a.client_name || '—'}</div>
                <div style={{ color: '#8891A8' }}>{a.staff?.name || 'Unassigned'}</div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 600, padding: '3px 9px', borderRadius: '20px', background: colors.bg, color: colors.text }}>
                    {a.status}
                  </span>
                </div>
                <div style={{ textAlign: 'right', color: '#8891A8' }}>
                  {a.ticket_price ? `$${a.ticket_price}` : '—'}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
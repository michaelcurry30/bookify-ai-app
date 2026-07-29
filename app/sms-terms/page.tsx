"use client"

export default function SmsTerms() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: '0 auto',
      padding: '60px 24px 100px',
      color: '#D5D8E2',
      background: '#0B0E17',
      minHeight: '100vh',
      lineHeight: 1.6,
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ color: '#fff', fontSize: '26px', marginBottom: '20px' }}>SMS Notifications & Consent</h1>

      <p style={{ marginBottom: '16px' }}>
        Bookify AI provides appointment reminder and waitlist notification services on behalf of businesses using our platform. When a business's client books an appointment, they are shown the following consent language before their phone number is used for SMS notifications:
      </p>

      <div style={{
        background: '#141926', border: '1px solid #242B3D', borderRadius: '8px',
        padding: '20px', margin: '20px 0', fontStyle: 'italic', color: '#EDEFF5'
      }}>
        "By providing your phone number, you agree to receive appointment reminder and waitlist notification text messages from this business via Bookify AI. Message and data rates may apply. Message frequency varies based on your appointment activity. Reply STOP to unsubscribe at any time, or HELP for help."
      </div>

      <h2 style={{ color: '#fff', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>What messages you'll receive</h2>
      <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
        <li style={{ marginBottom: '8px' }}>Appointment reminders sent before your scheduled appointment</li>
        <li style={{ marginBottom: '8px' }}>Waitlist notifications when a slot opens up that matches your request</li>
      </ul>

      <h2 style={{ color: '#fff', fontSize: '18px', marginTop: '32px', marginBottom: '12px' }}>Opting out</h2>
      <p style={{ marginBottom: '16px' }}>
        You can opt out of these messages at any time by replying <strong>STOP</strong> to any message you receive. For help, reply <strong>HELP</strong> or contact us at <a href="mailto:chewakamichael@gmail.com" style={{ color: '#7DD3FC' }}>chewakamichael@gmail.com</a>.
      </p>

      <p style={{ color: '#8891A8', fontSize: '13px', marginTop: '32px' }}>
        See our full <a href="/privacy" style={{ color: '#7DD3FC' }}>Privacy Policy</a> and <a href="/terms" style={{ color: '#7DD3FC' }}>Terms of Service</a> for more information.
      </p>
    </div>
  )
}
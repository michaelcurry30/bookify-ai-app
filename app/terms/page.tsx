"use client"

export default function Terms() {
  const wrap: React.CSSProperties = {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '60px 24px 100px',
    color: '#D5D8E2',
    background: '#0B0E17',
    minHeight: '100vh',
    lineHeight: 1.6,
    fontFamily: 'sans-serif'
  }
  const h1: React.CSSProperties = { color: '#fff', fontSize: '28px', marginBottom: '8px' }
  const h2: React.CSSProperties = { color: '#fff', fontSize: '19px', marginTop: '36px', marginBottom: '10px' }
  const p: React.CSSProperties = { marginBottom: '14px', fontSize: '15px' }
  const li: React.CSSProperties = { marginBottom: '8px', fontSize: '15px' }
  const link: React.CSSProperties = { color: '#7DD3FC' }

  return (
    <div style={wrap}>
      <h1 style={h1}>TERMS AND CONDITIONS</h1>
      <p style={{ ...p, color: '#8891A8' }}>Last updated July 21, 2026</p>

      <h2 style={h2}>1. AGREEMENT TO TERMS</h2>
      <p style={p}>
        These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Michael Chewaka, doing business as Bookify AI ("Company," "we," "us," or "our"), governing your access to and use of the website located at <a style={link} href="https://bookifyai.com">https://bookifyai.com</a> and the Bookify AI software service (collectively, the "Services").
      </p>
      <p style={p}>
        By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you must not access or use the Services.
      </p>

      <h2 style={h2}>2. DESCRIPTION OF SERVICES</h2>
      <p style={p}>
        Bookify AI is a subscription software service that helps appointment-based businesses reduce no-shows and automatically fill cancelled appointment slots through automated reminders and waitlist management, including SMS text messaging sent on behalf of business customers to their clients.
      </p>

      <h2 style={h2}>3. ELIGIBILITY</h2>
      <p style={p}>
        The Services are intended for business use only and are not directed to individuals under the age of 18. By using the Services, you represent that you are at least 18 years old and are using the Services for internal business purposes.
      </p>

      <h2 style={h2}>4. ACCOUNTS</h2>
      <p style={p}>
        To use certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information and to keep that information updated. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.
      </p>

      <h2 style={h2}>5. SUBSCRIPTIONS, BILLING, AND FREE TRIAL</h2>
      <p style={p}>
        The Services are offered on a subscription basis (Starter, Growth, and Premium plans) that automatically renews on a monthly basis until cancelled. Subscription fees are billed in advance in U.S. dollars via our payment processor, Stripe.
      </p>
      <p style={p}>
        New subscriptions include a 14-day free trial. No payment method is required to begin the trial. If you do not add a payment method before the trial period ends, your subscription and access to the Services will be automatically suspended. You may add a payment method at any time to continue uninterrupted service.
      </p>
      <p style={p}>
        <strong>No Refunds.</strong> Except as required by applicable law, all subscription fees are non-refundable. You may cancel your subscription at any time to stop future billing; cancellation does not entitle you to a refund for the current billing period.
      </p>

      <h2 style={h2}>6. CANCELLATION</h2>
      <p style={p}>
        You may cancel your subscription at any time by logging into your account and using the subscription management portal, or by contacting us using the information below. Cancellations take effect at the end of your current billing period, and you will retain access to the Services through that date.
      </p>

      <h2 style={h2}>7. SMS TEXT MESSAGING PROGRAM</h2>
      <p style={p}>
        As part of the Services, Bookify AI sends SMS text messages — including appointment reminders and waitlist notifications — on behalf of business customers to their end clients. By providing a phone number in connection with the Services, you consent to receive such messages. Message and data rates may apply. Message frequency varies based on appointment activity.
      </p>
      <p style={p}>
        Recipients may opt out of messages at any time by replying "STOP" to any message. Standard carrier messaging terms also apply.
      </p>

      <h2 style={h2}>8. PROHIBITED ACTIVITIES</h2>
      <p style={p}>You agree not to:</p>
      <ul>
        <li style={li}>Use the Services for any unlawful purpose or in violation of any applicable law;</li>
        <li style={li}>Attempt to gain unauthorized access to the Services, other accounts, or connected systems;</li>
        <li style={li}>Interfere with, disrupt, or place undue burden on the Services or the networks connected to them;</li>
        <li style={li}>Reverse engineer, decompile, or attempt to extract the source code of the Services, except as permitted by law;</li>
        <li style={li}>Use the Services to send messages in violation of applicable telecommunications or anti-spam laws, including sending messages without proper consent from the recipient.</li>
      </ul>

      <h2 style={h2}>9. THIRD-PARTY SERVICES AND LINKS</h2>
      <p style={p}>
        The Services rely on and may link to third-party services, including Stripe (payment processing), Twilio (SMS delivery), Supabase (data storage), and Vercel (hosting). We are not responsible for the content, policies, or practices of any third-party service. Your use of those services is subject to their own terms and privacy policies.
      </p>

      <h2 style={h2}>10. DISCLAIMER OF WARRANTIES</h2>
      <p style={p}>
        THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY PARTICULAR OUTCOME (SUCH AS A REDUCTION IN NO-SHOWS) WILL BE ACHIEVED.
      </p>

      <h2 style={h2}>11. LIMITATION OF LIABILITY</h2>
      <p style={p}>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES EXCEED THE AMOUNT YOU PAID US IN THE SIX (6) MONTHS PRECEDING THE CLAIM. WE WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
      </p>

      <h2 style={h2}>12. DISPUTE RESOLUTION</h2>
      <p style={p}>
        In the event of a dispute, you agree to first contact us and engage in good-faith informal negotiations for at least thirty (30) days before initiating any arbitration or legal proceeding. If the dispute is not resolved informally, it will be resolved by binding arbitration conducted in Johnson County, Kansas, United States, except where prohibited by law. If arbitration fees for a claim are found to be excessive, we agree to pay the amount deemed excessive. Any litigation that is not subject to arbitration will take place in the courts of Johnson County, Kansas.
      </p>

      <h2 style={h2}>13. GOVERNING LAW</h2>
      <p style={p}>
        These Terms are governed by the laws of the State of Kansas, United States, without regard to its conflict of law principles.
      </p>

      <h2 style={h2}>14. CHANGES TO THESE TERMS</h2>
      <p style={p}>
        We may update these Terms from time to time. If we make material changes, we will notify you by email. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.
      </p>

      <h2 style={h2}>15. PRIVACY</h2>
      <p style={p}>
        Your use of the Services is also governed by our <a style={link} href="/privacy">Privacy Policy</a>.
      </p>

      <h2 style={h2}>16. CONTACT US</h2>
      <p style={p}>
        Bookify AI (operated by Michael Chewaka, doing business as Bookify AI)<br />
        10716 W 128th Terrace<br />
        Overland Park, KS 66213<br />
        United States<br />
        Email: <a style={link} href="mailto:chewakamichael@gmail.com">chewakamichael@gmail.com</a>
      </p>
    </div>
  )
}

export const metadata = { title: 'BRO — Thank you' }

export default function Thanks() {
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', width: '100%' }}>
        <div className="eyebrow" style={{ display: 'inline-block' }}>
          BRO
        </div>
        <h2 style={{ marginBottom: 14 }}>Спасибо! / Thank you!</h2>
        <p style={{ margin: '0 auto', maxWidth: '46ch' }}>
          Заявка отправлена — мы ответим в течение дня.
          <br />
          Your request has been sent — we will get back within a day.
        </p>
        <a
          className="btn"
          href="/"
          style={{ marginTop: 30, display: 'inline-block', textDecoration: 'none' }}
        >
          ← BRO
        </a>
      </div>
    </section>
  )
}

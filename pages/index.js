export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>MotoGPs!</h1>
      <p>Welcome to Moto-GPs</p>

      {/* Load GPS script after page loads */}
      <Script src="/gps.js" strategy="afterInteractive" />
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>MotoGPs!</h1>
      <p>Welcome to Moto-GPs</p>
      <Link href="/gps">
        <button>Start Navigation</button>
      </Link>
    </div>
  );
}

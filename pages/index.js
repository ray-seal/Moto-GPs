{
  "name": "MotoGPs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.1.3",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.47",
    "@types/node": "^20.11.30",
    "typescript": "^5.4.5",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17"
  }
}

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

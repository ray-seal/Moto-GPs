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
      <Link href="/gps.js">
        <button>Start Navigation</button>
      </Link>
    </div>
  );
}

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this exists or create it for custom styles

const App = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleColorChange = (event) => {
    setBgColor(event.target.value);
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Choose a Background Color</h1>
      <select onChange={handleColorChange} value={bgColor}>
        <option value="white">White</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightgray">Light Gray</option>
        <option value="black">Black</option>
      </select>
      <p style={{ color: bgColor === 'black' ? 'white' : 'black' }}>
        The background color is: {bgColor}
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
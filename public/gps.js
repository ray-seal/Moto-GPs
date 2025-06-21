// pages/gps.js
import Head from 'next/head';
import Script from 'next/script';

export default function GPSPage() {
  return (
    <>
      <Head>
        <title>Moto-GPS</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body, html { margin: 0; padding: 0; height: 100%; }
          #map { height: 100%; }
          #hud {
            position: absolute;
            top: 10px;
            left: 10px;
            background: rgba(0,0,0,0.6);
            color: white;
            padding: 10px;
            z-index: 999;
            font-family: sans-serif;
          }
          #hud div { margin-bottom: 4px; }
        `}</style>
      </Head>
      <div id="hud">
        <div>Speed: <span id="speed">--</span> km/h</div>
        <div>Speed Limit: <span id="limit">--</span> km/h</div>
        <div>Top Speed: <span id="topSpeed">--</span> km/h</div>
        <div>Distance: <span id="distance">--</span> km</div>
        <div>Avg Speed: <span id="avgSpeed">--</span> km/h</div>
      </div>
      <div id="map"></div>
      <Script src="https://unpkg.com/leaflet/dist/leaflet.js" />
      <Script src="/gps.js" strategy="afterInteractive" />
    </>
  );
}

import React, { useEffect, useState } from 'react';
import './BackgroundBlobs.scss';

const COLORS = [
  'linear-gradient(120deg, #847dfd 0%, #232336 100%)',
  'linear-gradient(120deg, #63ddb2 0%, #232336 100%)',
  'linear-gradient(120deg, #ffb86c 0%, #ff6e91 100%)',
  'linear-gradient(120deg, #43e7ad 0%, #847dfd 100%)',
  'linear-gradient(120deg, #ffb86c 0%, #847dfd 100%)',
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

const N = 6;

const BackgroundBlobs = () => {
  const [blobs, setBlobs] = useState([]);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    function updateBlobs() {
      const app = document.querySelector('.App');
      const appHeight = app ? app.offsetHeight : document.body.scrollHeight;
      setContainerHeight(appHeight);
      const blobsArr = Array.from({ length: N }).map((_, i) => {
        const size = getRandom(400, 700);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const top = Math.min(appHeight - size, Math.max(0, getRandom(0, appHeight)));
        const left = `${getRandom(0, 100)}%`;
        const delay = `${getRandom(0, 12)}s`;
        const blur = getRandom(100, 140);
        const opacity = getRandom(0.10, 0.19);
        return { color, size, top, left, delay, blur, opacity };
      });
      setBlobs(blobsArr);
    }
    updateBlobs();
    window.addEventListener('resize', updateBlobs);
    return () => window.removeEventListener('resize', updateBlobs);
  }, []);

  return (
    <div className="background-blobs" style={{ width: '100%', height: containerHeight, position: 'absolute', top: 0, left: 0, overflow: 'hidden', zIndex: 0 }}>
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="background-blob"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: blob.color,
            filter: `blur(${blob.blur}px)`,
            opacity: blob.opacity,
            animationDelay: blob.delay,
            position: 'absolute',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs; 
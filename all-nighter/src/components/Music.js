import React, { useState } from 'react';

function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // my playlist links
  const playlistLinks = [
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0tdl83kVOiY6aNIPrSjdwo?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX3Kdv0IChEm9?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX0mWZXNs0ArA?utm_source=generator", 
    "https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0?utm_source=generator"
  ];

  // go to next playlist
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlistLinks.length);
  };

  // go to previous playlist  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlistLinks.length) % playlistLinks.length);
  };

  return (
    <div className="music-panel">
      <h3>curated playlists to keep u awake 🎧</h3>
      
      <div className="playlist-carousel">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>‹</button>
        
        <div className="playlist-display">
          <iframe 
            title="spotify playlist"
            style={{borderRadius: '12px'}} 
            src={playlistLinks[currentIndex]} 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
          <div className="carousel-dots">
            {playlistLinks.map((_, i) => (
              <span 
                key={i} 
                className={`dot ${i === currentIndex ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
        
        <button className="arrow-btn right-arrow" onClick={handleNext}>›</button>
      </div>
    </div>
  );
}

export default Music;
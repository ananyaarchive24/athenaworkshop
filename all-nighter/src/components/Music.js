import React, { useState } from 'react';

function Music() {
  const [currentPlaylist, setCurrentPlaylist] = useState(0);
  
  // Your 5 playlist URLs
  const playlists = [
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0tdl83kVOiY6aNIPrSjdwo?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator",
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator", 
    "https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator"
  ];

  const nextPlaylist = () => {
    setCurrentPlaylist((current) => (current + 1) % playlists.length);
  };

  const prevPlaylist = () => {
    setCurrentPlaylist((current) => (current - 1 + playlists.length) % playlists.length);
  };

  return (
    <div className="music-panel">
      <h3>Playlists to keep you awake</h3>
      
      <div className="playlist-carousel">
        <button className="arrow-btn left-arrow" onClick={prevPlaylist}>‹</button>
        
        <div className="playlist-display">
          <iframe 
            style={{borderRadius: '12px'}} 
            src={playlists[currentPlaylist]} 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
          <div className="carousel-dots">
            {playlists.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentPlaylist ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
        
        <button className="arrow-btn right-arrow" onClick={nextPlaylist}>›</button>
      </div>
    </div>
  );
}

export default Music;
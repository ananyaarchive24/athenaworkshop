import React from 'react';

function Music() {
  return (
    <div className="music-panel">
      <h3>Playlists to keep you awake</h3>
      
      
        {/* to do - find good allnighter spotify playlists */}
        <div className="playlist-grid">


            <div className="playlist-1">
                <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>


            <div className="playlist-2">
                <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/0tdl83kVOiY6aNIPrSjdwo?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>            </div>
            
            
            <div className="playlist-1">
                <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="playlist-1">
                <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <div className="playlist-1">
                <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX692WcMwL2yW?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>




        </div>
      </div>

  );
}

export default Music;
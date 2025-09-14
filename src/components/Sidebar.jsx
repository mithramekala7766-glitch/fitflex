import React from 'react';

function Sidebar({ tips, favorites, onOpenDetail, onToggleFavorite }) {
  return (
    <>
      <h3>Nutrition & Wellness</h3>
      <ul className="tips">
        {tips.map(tip => (
          <li key={tip.id}>
            <strong>{tip.title}:</strong> {tip.text}
          </li>
        ))}
      </ul>

      <div className="favorites-box">
        <h4>Your Favorites:</h4>
        <div id="favorites">
          {!favorites.length ? (
            'No favorites yet.'
          ) : (
            favorites.map(item => (
              <div key={item.id} className="fav-item center">
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenDetail(item.id); }}>
                  {item.title}
                </a>
                <button className="btn" onClick={() => onToggleFavorite(item)}>Remove</button>
              </div>
            ))
          )}
        </div>
      </div>

      <div style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--muted)' }}>
        <strong>Note:</strong> Premium workouts show a badge — click "Unlock" to simulate purchase.
      </div>
    </>
  );
}

export default Sidebar;
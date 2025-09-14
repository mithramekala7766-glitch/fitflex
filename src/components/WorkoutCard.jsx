// src/components/WorkoutCard.jsx

import React from 'react';

const WorkoutCard = ({ workout, onOpenDetail, onToggleFavorite, onUnlockPremium, isFavorite }) => {
  // We need to know if premium is unlocked from localStorage to show the right button
  const isPremiumUnlocked = JSON.parse(localStorage.getItem('ff_premium_unlocked') || 'false');
  const isLocked = workout.isPremium && !isPremiumUnlocked;

  return (
    // Add the 'premium' class for the border style, same as the old code
    <div className={`card ${workout.isPremium ? 'premium' : ''}`}>
      <h4>{workout.title}</h4> {/* FIX: Was workout.name */}
      <p>{`${workout.level} • ${workout.duration} min`}</p> {/* FIX: Was workout.difficulty */}

      <div className="actions">
        {/* FIX: The handler needs the ID, not the whole object */}
        <button className="btn" onClick={() => onOpenDetail(workout.id)}>
          Details
        </button>

        <button className="btn" onClick={() => onToggleFavorite(workout)}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>

        {/* This logic replicates showing "Unlock" or the "Premium" badge */}
        {isLocked ? (
          <button className="btn" onClick={onUnlockPremium}>
            Unlock
          </button>
        ) : (
          workout.isPremium && <span className="badge">Premium</span>
        )}
      </div>
    </div>
  );
};

export default WorkoutCard;
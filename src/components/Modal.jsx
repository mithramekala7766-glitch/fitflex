import React from 'react';

function Modal({ workout, onClose }) {
  if (!workout) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <h2>{workout.title} {workout.isPremium && "(Premium)"}</h2>
        <p className="muted">{`${workout.category} ${workout.level} • ${workout.duration} min`}</p>
        <p>{workout.description}</p>

        <ol className="exercise-list">
          {workout.exercises.map((e, index) => (
            <li key={index}>{`${e.name} — ${e.reps}`}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Modal;
// src/components/WorkoutList.jsx

// ... imports
import WorkoutCard from './WorkoutCard'; // <-- ADD THIS LINE

function WorkoutList({ workouts, onOpenDetail, onToggleFavorite, favorites, onUnlockPremium }) { // Make sure onUnlockPremium is here
  // ... rest of the component
  return (
    <div className="list">
      {workouts.map(workout => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
          onOpenDetail={onOpenDetail}
          onToggleFavorite={onToggleFavorite}
          onUnlockPremium={onUnlockPremium} // Pass this prop down
          isFavorite={!!favorites.find(f => f.id === workout.id)}
        />
      ))}
    </div>
  );
}

export default WorkoutList;
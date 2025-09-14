// src/components/Filters.jsx

import React from 'react';

function Filters({ workouts, activeCategory, activeLevel, onSelectCategory, onSelectLevel }) {
  // --- Create unique categories ---
  // 1. Create a Set of all categories from the workout data.
  const categorySet = new Set(workouts.map(w => w.category));
  // 2. If "All" happens to be a category in the data, remove it to avoid duplicates.
  categorySet.delete('All');
  // 3. Create the final array, starting with "All" and then spreading the unique values.
  const categories = ['All', ...categorySet];

  // --- Create unique levels (same logic) ---
  const levelSet = new Set(workouts.map(w => w.level));
  levelSet.delete('All');
  const levels = ['All', ...levelSet];

  return (
    <div className="filters">
      <div>
        <strong>Category:</strong>
        {categories.map(category => (
          <button
            key={category}
            className={`pill ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <strong>Level:</strong>
        {levels.map(level => (
          <button
            key={level}
            className={`pill ${activeLevel === level ? 'active' : ''}`}
            onClick={() => onSelectLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filters;
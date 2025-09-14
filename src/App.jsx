import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Filters from './components/Filters';
import WorkoutList from './components/WorkoutList';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import { DATA } from './data'; // We will create this file next

// Local storage keys
const FAV_KEY = 'ff_favs';
const PREMIUM_KEY = 'ff_premium_unlocked';

function App() {
  const [workouts] = useState(DATA.workouts);
  const [tips] = useState(DATA.tips);

  // State for filtering and searching
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');

  // State for favorites and premium access
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(() => JSON.parse(localStorage.getItem(PREMIUM_KEY) || 'false'));

  // State for the modal
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  // Effect to save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Effect to save premium status to local storage
  useEffect(() => {
    localStorage.setItem(PREMIUM_KEY, JSON.stringify(isPremiumUnlocked));
  }, [isPremiumUnlocked]);

  // --- Filtering Logic ---
  const filteredWorkouts = workouts.filter(w => {
    const query = searchQuery.toLowerCase();
    if (activeCategory && activeCategory !== 'All' && w.category !== activeCategory) return false;
    if (activeLevel && activeLevel !== 'All' && w.level !== activeLevel) return false;
    if (!query) return true;
    return w.title.toLowerCase().includes(query) || w.description.toLowerCase().includes(query) || w.category.toLowerCase().includes(query);
  });

  // --- Handlers ---
  const handleSearch = (query) => setSearchQuery(query);
  const handleClear = () => setSearchQuery('');
  const handleSelectCategory = (category) => setActiveCategory(category);
  const handleSelectLevel = (level) => setActiveLevel(level);

  const handleOpenDetail = (workoutId) => {
    const workout = workouts.find(w => w.id === workoutId);
    if (!workout) return;

    if (workout.isPremium && !isPremiumUnlocked) {
      if (confirm('This is a premium workout. Unlock premium access now?')) {
        setIsPremiumUnlocked(true);
        alert('Premium unlocked!');
        setSelectedWorkout(workout);
      }
    } else {
      setSelectedWorkout(workout);
    }
  };

  const handleCloseModal = () => setSelectedWorkout(null);

  const handleToggleFavorite = (workout) => {
    setFavorites(prevFavs => {
      if (prevFavs.find(f => f.id === workout.id)) {
        return prevFavs.filter(f => f.id !== workout.id); // Remove if exists
      } else {
        return [...prevFavs, { id: workout.id, title: workout.title }]; // Add if not
      }
    });
  };

  const handleUnlockPremium = () => {
    if (confirm('Unlock premium content for all workouts?')) {
      setIsPremiumUnlocked(true);
    }
  };


  return (
    <>
      <Navbar />
      <main className="container">
        <h1 style={{ color: '#0c6b9b' }}>𝐂𝐋𝐀𝐒𝐒𝐈𝐂 𝐅𝐈𝐓𝐍𝐄𝐒𝐒</h1>
        <Search onSearch={handleSearch} onClear={handleClear} />
        <Filters
          workouts={workouts}
          activeCategory={activeCategory}
          activeLevel={activeLevel}
          onSelectCategory={handleSelectCategory}
          onSelectLevel={handleSelectLevel}
        />
        <div className="layout">
          <section className="left">
            <WorkoutList
              workouts={filteredWorkouts}
              onOpenDetail={handleOpenDetail}
              onToggleFavorite={handleToggleFavorite}
              favorites={favorites}
              onUnlockPremium={handleUnlockPremium}
            />
          </section>
          <aside className="right">
            <Sidebar
              tips={tips}
              favorites={favorites}
              onOpenDetail={handleOpenDetail}
              onToggleFavorite={handleToggleFavorite}
            />
          </aside>
        </div>
      </main>
      {selectedWorkout && <Modal workout={selectedWorkout} onClose={handleCloseModal} />}
    </>
  );
}

export default App;
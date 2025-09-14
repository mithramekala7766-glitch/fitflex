import React, { useState } from 'react';

/**
 * Renders the search bar and its buttons.
 * @param {object} props - The props passed from the parent component.
 * @param {function} props.onSearch - Function to call when the user clicks "Search" or hits Enter.
 * @param {function} props.onClear - Function to call when the user clicks "Clear".
 */
function Search({ onSearch, onClear }) {
  // 'useState' creates a state variable to hold the current value of the input field.
  // 'query' is the current value, and 'setQuery' is the function to update it.
  const [query, setQuery] = useState('');

  // This function is called when the "Search" button is clicked.
  // It calls the 'onSearch' function passed down from App.jsx with the current query.
  const handleSearchClick = () => {
    onSearch(query);
  };

  // This function is called whenever a key is pressed in the input field.
  const handleKeyDown = (e) => {
    // If the key pressed is "Enter", trigger the search.
    if (e.key === 'Enter') {
      onSearch(query);
    }
  };

  // This function is called when the "Clear" button is clicked.
  const handleClearClick = () => {
    // Reset the input field in this component.
    setQuery('');
    // Call the 'onClear' function from App.jsx to reset the filter state there.
    onClear();
  };

  return (
    <div className="search">
      <input
        id="searchInput"
        placeholder="Search workouts, categories, descriptions..."
        // The input's displayed value is always tied to our 'query' state.
        value={query}
        // When the user types, update the 'query' state.
        onChange={(e) => setQuery(e.target.value)}
        // Listen for the "Enter" key press.
        onKeyDown={handleKeyDown}
      />
      <button id="searchBtn" className="btn" onClick={handleSearchClick}>Search</button>
      <button id="clearBtn" className="btn" onClick={handleClearClick}>Clear</button>
    </div>
  );
}

export default Search;
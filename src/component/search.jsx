import React from 'react';
import './search.css'; 

function Search({ setSearchQuery, searchQuery }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default Search;

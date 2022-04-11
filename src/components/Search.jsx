import React from 'react';

function Search() {
  return (
    <div>
      <div className="search-main">
        <i class="search-icon fa-solid fa-magnifying-glass"></i>

        <input
          id="search-input"
          type="text"
          placeholder="Search GitHub Username..."
        />

        <button id="search-button">Search</button>
      </div>
    </div>
  );
}

export default Search;

import React, {useState, useEffect} from 'react';
import {getUser} from '../api/api';

function Search({theme, setUserData}) {
  useEffect(() => {
    let ignore = false;
    if (!ignore) userSearch('tyrellcurry');
    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [searchInput, setSearchInput] = useState('');
  const userSearch = (value) => {
    getUser(value).then((data) => {
      const d = data.data;
      const obj = {
        name: d.name,
        user: d.login,
        bio: d.bio,
        date: d.created_at,
        repos: d.public_repos,
        followers: d.followers,
        following: d.following,
        location: d.location,
        twitter: d.twitter_username,
        website: d.blog,
        company: d.company,
        avatar: d.avatar_url,
      };
      setUserData(obj);
    });
  };

  const submittedInput = () => {
    userSearch(searchInput);
  };

  return (
    <div>
      <div className="search-main" data-theme={theme}>
        <i class="search-icon fa-solid fa-magnifying-glass"></i>

        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          id="search-input"
          type="text"
          placeholder="Search GitHub Username..."
        />

        <button id="search-button" onClick={submittedInput}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

import React from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

function Search() {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <SearchResults />
    </div>
  );
}

export default Search;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./SearchResults";

const Search = ({
  searchedBooks,
  searchBooks,
  changeShelf,
  setSearchedBooks,
}) => {
  const [searchField, setSearchField] = useState("");

  const handleSearchField = (e) => {
    let val = e.target.value;
    setSearchField(val);
    searchBooks(val);
  };

  return (
    <div className="search-books">
      <div className="list-books-title">
        <h1>My Bookshelves</h1>
        <div className="shelfPic"></div>
      </div>
      <div className="search-books-bar">
        <Link to="/">
          <button
            className="close-search"
            onClick={() => {
              setSearchedBooks([]);
            }}
          >
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchField}
            onChange={handleSearchField}
          />
        </div>
      </div>
      <SearchResults searchedBooks={searchedBooks} changeShelf={changeShelf} />
    </div>
  );
};

export default Search;

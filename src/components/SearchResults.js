import React from "react";
import Book from "./Book";

const SearchResults = () => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        map books
        <Book />
      </ol>
    </div>
  );
};

export default SearchResults;

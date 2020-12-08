import React from "react";
import Book from "./Book";

function SearchResults() {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        map books
        <Book />
      </ol>
    </div>
  );
}

export default SearchResults;

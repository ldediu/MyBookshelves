import React from "react";
import Book from "./Book";

const SearchResults = ({ searchedBooks, changeShelf }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchedBooks.map((bk) => (
          <Book
            bookInfo={bk}
            key={bk.id}
            shelf={bk.shelf ? bk.shelf : "none"}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;

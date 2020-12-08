import React from "react";
import Book from "./Book";

function Bookshelf() {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Shelf Name</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          books list grid map
          <Book />
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;

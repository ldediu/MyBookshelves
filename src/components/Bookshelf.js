import React from "react";
import Book from "./Book";

const Bookshelf = ({ shelf, myBooks }) => {
  const booksOnThisShelf = myBooks.filter((book) => book.shelf === shelf.id);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnThisShelf.map((book) => (
            <Book bookInfo={book} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;

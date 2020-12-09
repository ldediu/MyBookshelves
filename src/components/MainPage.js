import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const bookShelves = [
  { name: "Currently reading", id: "currentlyReading" },
  { name: "Want to Read", id: "wantToRead" },
  { name: "Have Read", id: "read" },
];

const MainPage = ({ myBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Bookshelves</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookShelves.map((shelf) => (
            <Bookshelf shelf={shelf} key={shelf.id} myBooks={myBooks} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;

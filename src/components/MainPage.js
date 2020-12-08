import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

function MainPage() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Bookshelf</h1>
      </div>
      <div className="list-books-content">
        <div>
          map bookshelves
          <Bookshelf />
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;

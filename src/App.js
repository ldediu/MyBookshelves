import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import Search from "./components/Search";

function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await BooksAPI.getAll();
        setMyBooks(result);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    fetchData();
  }, []);

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
      setError(true);
    });
    let newBooks;
    if (shelf === "none") {
      newBooks = myBooks.filter((bk) => bk.id !== book.id);
    } else {
      book.shelf = shelf;
      newBooks = myBooks.filter((bk) => bk.id !== book.id).concat(book);
    }
    setMyBooks(newBooks);
  };

  const searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setSearchedBooks([]);
        } else {
          setSearchedBooks(books);
        }
      });
    } else {
      setSearchedBooks([]);
    }
  };

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <MainPage myBooks={myBooks} changeShelf={changeShelf} error={error} />
        )}
      />
      <Route
        path="/search"
        render={() => (
          <Search
            searchedBooks={searchedBooks}
            searchBooks={searchBooks}
            changeShelf={changeShelf}
            setSearchedBooks={setSearchedBooks}
          />
        )}
      />
    </div>
  );
}

export default App;

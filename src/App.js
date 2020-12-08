import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import MainPage from "./components/MainPage";
import Search from "./components/Search";

function App() {
  const [myBooks, setMyBooks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("useeffect running");
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

  console.log(myBooks);

  return (
    <div className="app">
      <Route exact path="/" component={MainPage} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default App;

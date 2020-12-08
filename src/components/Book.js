import React from "react";
import ShelfSwitcher from "./ShelfSwitcher";

function Book() {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: ``,
              background: "red",
            }}
          />
          <ShelfSwitcher />
        </div>
        <div className="book-title">Book Title</div>
        <div className="book-authors"></div>
      </div>
    </li>
  );
}

export default Book;

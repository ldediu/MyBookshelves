import React from "react";
import ShelfSwitcher from "./ShelfSwitcher";

const Book = ({ bookInfo, shelf, changeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                bookInfo.imageLinks
                  ? bookInfo.imageLinks.thumbnail
                  : "icons/bookNoCover.png"
              })`,
            }}
          />
          <ShelfSwitcher
            bookInfo={bookInfo}
            shelf={shelf}
            changeShelf={changeShelf}
          />
        </div>
        <div className="book-title">{bookInfo.title}</div>
        <div className="book-authors">
          {bookInfo.authors ? bookInfo.authors.join(", ") : "No Author"}
        </div>
      </div>
    </li>
  );
};

export default Book;

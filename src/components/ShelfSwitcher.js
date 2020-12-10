import React from "react";

const ShelfSwitcher = ({ bookInfo, shelf, changeShelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        value={shelf.id}
        onChange={(e) => changeShelf(bookInfo, e.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSwitcher;

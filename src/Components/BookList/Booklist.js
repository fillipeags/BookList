import React from "react";

import "./Booklist.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

export default BookList;

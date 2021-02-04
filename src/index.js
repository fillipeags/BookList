import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/617wmdLWVcL._AC_UY218_.jpg",
    title: "Ed Catmull, Amy Wallace",
    author: "Criatvidade S.A",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/618qR6-xcQL._AC_UY218_.jpg",
    title: " Jake Knapp, John Zeratsky",
    author: "Sprint. O Método Usado no Google",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{author}</h1>
      <h4>{title}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

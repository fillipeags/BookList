import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/617wmdLWVcL._AC_UY218_.jpg",
  title: "Ed Catmull, Amy Wallace",
  author: "Criatvidade S.A",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/618qR6-xcQL._AC_UY218_.jpg",
  title: " Jake Knapp, John Zeratsky",
  author: "Sprint. O Método Usado no Google ",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.author}</h1>
      <h4>{props.title}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

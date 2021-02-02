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
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis,
          reiciendis?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{author}</h1>
      <h4>{title}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

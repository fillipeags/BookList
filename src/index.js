import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/617wmdLWVcL._AC_UY218_.jpg"
    alt="Criatividade SA"
  />
);

const Title = () => <h1>Criatividade S.A</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Ed Catmull, Amy Wallace
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById("root"));

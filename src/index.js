import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "Criatvidade S.A";
  const author = "Ed Catmull, Amy Wallace";

  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/617wmdLWVcL._AC_UY218_.jpg"
        alt="Criatividade SA"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

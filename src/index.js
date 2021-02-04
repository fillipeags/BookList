import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/617wmdLWVcL._AC_UY218_.jpg",
    title: "Ed Catmull, Amy Wallace",
    author: "Criatvidade S.A",
    storeLink:
      "https://www.amazon.com.br/Criatividade-S-Ed-Catmull/dp/8532529569/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1Y1D5ROGJRPCM&dchild=1&keywords=criatividade+sa&qid=1612470520&sprefix=criati%2Caps%2C319&sr=8-1",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/618qR6-xcQL._AC_UY218_.jpg",
    title: " Jake Knapp, John Zeratsky",
    author: "Sprint",
    storeLink:
      "https://www.amazon.com.br/Sprint-M%C3%A9todo-Google-Testar-Aplicar/dp/8551001523/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=sprint&qid=1612470504&sr=8-1",
  },

  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/411rhY0x0eL._AC_UY218_.jpg",
    title: " Donald A. Norman e Ana Deiró",
    author: "O design do dia a dia",
    storeLink:
      "https://www.amazon.com.br/Design-do-Dia/dp/8532520839/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=design+do+dia+a+dia&qid=1612469440&sr=8-3",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, storeLink } = props;

  //attribute, eventHandler
  const clickHandler = (store) => {
    window.open(storeLink, "_blank");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{author}</h1>
      <h4>{title}</h4>
      <button type="button" onClick={clickHandler}>
        GO TO STORE
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

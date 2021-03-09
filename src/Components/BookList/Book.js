import React from "react";

const Book = (props) => {
  const { img, title, author, storeLink } = props;

  //attribute, eventHandler
  const clickHandler = (store) => {
    window.open(storeLink, "_blank");
  };

  return (
    <article className="book">
      <img src={img} alt=" " />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        GO TO STORESSSS
      </button>
    </article>
  );
};

export default Book;

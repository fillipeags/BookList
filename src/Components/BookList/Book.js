import React from "react";

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

export default Book;

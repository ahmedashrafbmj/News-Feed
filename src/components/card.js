import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img ,Accomodation, convenience} = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{Accomodation}</p>
        <p>{convenience}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to favourites</button>
      </div>
    </div>
  );
};

export default Cards;
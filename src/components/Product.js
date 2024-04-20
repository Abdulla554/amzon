import React from "react";
import { useAuth } from "../context/GlobalState";
import starIcon from "../images/icons/star.png";
import "./Product.css";

const Product = ({ title, price, image, rating }) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:crypto.randomUUID(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">


      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <strong>{price}$</strong>
        </p>
      </div>

      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={starIcon} alt=""/>
            </p>
          ))}
      </div>

      <img src={image} alt="product-img" />


      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;

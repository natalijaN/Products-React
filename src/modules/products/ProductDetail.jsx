import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardDetail from "../../components/CardDetail";

const ProductDetail = () => {
  const navigate = useNavigate();
  const Product = useSelector((state) => state.Product);
  const { product } = Product;

  const slides = product.images
    .filter((image) => !image.includes("thumbnail"))
    .map((image) => {
      return { url: image };
    });

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <CardDetail card={product} handleClick={handleClick} slides={slides}>
      Go back.
    </CardDetail>
  );
};

export default ProductDetail;

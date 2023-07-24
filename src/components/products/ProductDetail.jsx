import React from "react";
import { useLocation, Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const ProductDetail = () => {
  const params = useLocation();
  const product = params.state.product;
  const currentPage = params.state.currentPage;
  const productId = params.state.productId;

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    marginBottom: "1rem",
  };
  const slides = product.images
    .filter((image) => !image.includes("thumbnail"))
    .map((image) => {
      return { url: image };
    });
  return (
    <div className="product-container h-screen flex flex-col justify-start items-center mt-4">
      <h3 className="font-bold mb-9">{product.title}</h3>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

      <div>{product.description}</div>
      <div>Price: {product.price} €</div>
      <div>Discount: {product.discountPercentage}%</div>
      <div>
        <button className="font-serif bg-gray-500 p-3 text-white rounded">
          <Link
            to="/main"
            state={{ currentPage, productId }}
            className="hover-underline-animation"
          >
            Back to all products.
          </Link>
        </button>
        <button className="font-serif bg-gray-500 p-3 text-white rounded">
          <Link
            to="/products"
            state={{ currentPage, productId }}
            className="hover-underline-animation"
          >
            Add to card.
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

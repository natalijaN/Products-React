import React from "react";
import { Link } from "react-router-dom";
import useDataFetcher from "../products/useDataFetcher";

const Product = ({ productId, product }) => {
  const {
    loading,
    products,
    totalPages,
    currentPage,
    setCurrentPage,
    categories,
  } = useDataFetcher();

  return (
    <div
      id={productId}
      className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-8"
    >
      <img
        src={product.thumbnail}
        alt=""
        className="w-56 p-2 border-[2px] border-solid border-purple rounded-3xl object-cover"
      />
      <div className="text-[1.2rem] font-bold">{product.title}</div>
      <Link
        to={`/productsDetail`}
        state={{ product, currentPage, productId }}
        className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
      >
        View product
      </Link>
    </div>
  );
};

export default Product;

import React, { useEffect, useLayoutEffect } from "react";
import Product from "./Product";
import { useLocation } from "react-router-dom";

const Products = ({ products, currentPage }) => {
  const params = useLocation();
  const productId = params?.state?.productId;

  useLayoutEffect(() => {
    const el = document.getElementById(productId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [products]);

  const productsMap = products.map((product) => {
    return (
      <Product
        productId={`product-item-${product.id}`}
        key={product.id}
        product={product}
        currentPage={currentPage}
      />
    );
  });

  return (
    <div className="font-Poppins section pt-1 grid grid-cols-3 gap-10">
      {products ? productsMap : null}
    </div>
  );
};

export default Products;

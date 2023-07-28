import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { SetProductId, SetProduct } from "../../redux/actions/ProductActions";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Product = useSelector((state) => state.Product);
  const { productId } = Product;

  useEffect(() => {
    const el = document.getElementById(`product-item-${productId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [products]);

  const handleClick = (product) => {
    navigate("/productsDetail");
    dispatch(SetProductId(product.id));
    dispatch(SetProduct(product));
  };

  const productsMap = products.map((product) => {
    return (
      <Card
        cardId={`product-item-${product.id}`}
        key={product.id}
        card={product}
        handleClick={handleClick}
      >
        View product
      </Card>
    );
  });

  return (
    <div className="section pt-1 grid grid-cols-3 gap-10">
      {products ? productsMap : null}
    </div>
  );
};

export default Products;

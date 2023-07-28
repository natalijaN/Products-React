import React, { useState, useEffect, useContext } from "react";
import Products from "../products/Products";
import useDataFetcher from "../utils/useDataFetcher";
import PaginationButton from "../pagination/PaginationButton";
import Categories from "../categories/Categories";
import { Oval } from "react-loader-spinner";
import { GlobalContext } from "../../context/GlobalContext";

const Main = () => {
  const [filteredProducts, setFilteredProducts] = useState("");
  const { loading, products } = useDataFetcher();
  const { currentPage, totalPages, changePage } = useContext(GlobalContext);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handlePageClick = ({ selected }) => {
    changePage(selected);
  };

  return (
    <div className="font-Poppins section pt-1">
      {loading ? (
        <div className="flex h-screen justify-center items-center">
          <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            strokeWidthSecondary={1}
            color="#9CA3AF"
            secondaryColor="white"
          />
        </div>
      ) : (
        <>
          <Categories />
          <Products products={filteredProducts} />
          <PaginationButton
            totalPages={totalPages}
            handlePageClick={handlePageClick}
            forcePage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default Main;

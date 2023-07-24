import React, { useState, useEffect } from "react";
import Products from "../products/Products";
import useDataFetcher from "../products/useDataFetcher";
import { useLocation } from "react-router-dom";
import PaginationButton from "../pagination/PaginationButton";
import Categories from "../categories/Categories";

const VIEW_ALL = "view all";

const Main = () => {
  const params = useLocation();
  const [filteredProducts, setFilteredProducts] = useState("");
  const [categories, setCategories] = useState([]);
  console.log(categories);
  const previousPage = params?.state?.currentPage;
  const {
    loading,
    products,
    totalPages,
    currentPage,
    setCurrentPage,
    execute,
  } = useDataFetcher();

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const productsCategories =
    categories &&
    categories.map((category, i) => {
      const isCategorySelected = category.selected ? "selected" : "";
      return (
        <button
          key={i}
          onClick={() => filterCategories(category)}
          selected
          className={`${isCategorySelected} category inline-block mr-8 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-xs hover:bg-gray-700`}
        >
          {category.name}
        </button>
      );
    });

  const filterCategories = (selectedCategory) => {
    if (selectedCategory.name.toLowerCase() === VIEW_ALL) {
      execute(null, true);
    } else {
      execute(selectedCategory.name, true);
    }
  };

  return (
    <div className="font-Poppins section pt-1">
      {loading ? (
        <div className="text-center text-5xl">Loading...</div>
      ) : (
        <>
          <Categories
            productsCategories={productsCategories}
            filterCategories={filterCategories}
          />
          <Products products={filteredProducts} currentPage={currentPage} />
          <PaginationButton
            totalPages={totalPages}
            currentPage={previousPage ? previousPage : currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Main;

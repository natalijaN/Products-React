import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = ({ filterCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      const mappedCategories = result.data.map((category) => {
        return {
          name: category,
          selected: false,
        };
      });
      setCategories([
        {
          name: "View all",
          selected: true,
        },
        ...mappedCategories,
      ]);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (selectedCategory) => {
    setCategories(
      categories.map((category) => {
        return category.name === selectedCategory.name
          ? { ...category, selected: true }
          : { ...category, selected: false };
      })
    );
    filterCategories(selectedCategory);
  };

  const productsCategories =
    categories &&
    categories.map((category, i) => {
      const isCategorySelected = category.selected ? "selected" : "";
      return (
        <button
          key={i}
          onClick={() => handleCategoryClick(category)}
          selected
          className={`${isCategorySelected} category inline-block mr-8 bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-xs hover:bg-gray-700`}
        >
          {category.name}
        </button>
      );
    });

  return (
    <div>
      {categories ? (
        <div className="inline-block whitespace-nowrap overflow-x-scroll justify-center items-center h-14 w-full">
          {productsCategories}
        </div>
      ) : null}
    </div>
  );
};

export default Categories;

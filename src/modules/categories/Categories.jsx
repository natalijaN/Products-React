import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from "../../components/Button";
import { GlobalContext } from "../../context/GlobalContext";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const { selectedCategory, changeCategory, changePage } =
    useContext(GlobalContext);

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
    const category = categories.filter((category) => {
      return category.name === selectedCategory.name;
    });

    changeCategory(category);
    changePage(0);
  };

  const productsCategories =
    categories &&
    categories.map((category, i) => {
      let categorySelectedClass = "";
      if (category.name === selectedCategory.name) {
        categorySelectedClass = "selected";
      }
      return (
        <Button
          key={i}
          onClick={() => handleCategoryClick(category)}
          extraClass={`${categorySelectedClass} category inline-block mr-8 bg-gray-500 hover:bg-gray-700 py-2 px-4 text-xs`}
        >
          {category.name}
        </Button>
      );
    });

  return (
    <>
      {categories ? (
        <div className="inline-block whitespace-nowrap overflow-x-scroll justify-center items-center h-14 w-full">
          {productsCategories}
        </div>
      ) : null}
    </>
  );
};

export default Categories;

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const VIEW_ALL = "view all";

const useDataFetcher = () => {
  // const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { currentPage, totalPages, selectedCategory, changeTotalPages } =
    useContext(GlobalContext);

  const fetchData = async () => {
    let page = Math.min(currentPage, totalPages);
    let skip = page === 0 ? 0 : page * 12;
    let API_URL =
      selectedCategory.name.toLowerCase() !== VIEW_ALL
        ? `https://dummyjson.com/products/category/${selectedCategory.name}`
        : `https://dummyjson.com/products?limit=12&skip=${skip}`;
    const result = await axios.get(API_URL);
    changeTotalPages(Math.ceil(result.data.total / 10));
    setProducts(result.data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedCategory]);

  return {
    loading,
    products,
    totalPages,
  };
};

export default useDataFetcher;

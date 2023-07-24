import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetcher = (params, executeOnMount = true) => {
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  // const [categories, setCategories] = useState(0);

  const fetchData = async (params) => {
    const page = Math.min(currentPage + 1, totalPages);
    const skip = page === 1 ? 0 : page;
    let API_URL = params
      ? `https://dummyjson.com/products/category/${params}`
      : `https://dummyjson.com/products?limit=12&skip=${skip}`;
    const result = await axios.get(API_URL);
    setTotalPages(Math.ceil(result.data.total / 10));
    setProducts(result.data.products);
    // setCategories([
    //   ...new Set(
    //     result.data.products.map((product) => {
    //       return product.category;
    //     })
    //   ),
    // ]);
    setLoading(false);
  };

  useEffect(() => {
    if (executeOnMount) fetchData(params);
  }, []);

  return {
    loading,
    products,
    totalPages,
    currentPage,
    setCurrentPage,
    // categories,
    execute: fetchData,
  };
};

export default useDataFetcher;

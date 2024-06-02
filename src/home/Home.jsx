import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../component/card";
import SelectBox from "../component/selectBox";
import Search from "../component/search";
import "./home.css"; 

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products`);
        setProductData(res.data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchProducts();
  }, []);

  const options = [
    { value: "", label: "All" },
    { value: "men's clothing", label: "Men Cloths" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
    { value: "women's clothing", label: "Women Cloths" },
  ];

  // Filter products based on category and search query
  const filteredProducts = productData.filter((product) => {
    const categoryMatch = selectedFilter ? product.category === selectedFilter : true;
    const searchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="home-container">
      <div className="search-filter">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SelectBox
          options={options}
          onChange={(e) => setSelectedFilter(e.target.value)}
        />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Card products={filteredProducts} />
      )}
    </div>
  );
};

export default Home;

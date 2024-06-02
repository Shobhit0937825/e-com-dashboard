import React, { useEffect, useState } from "react";
import "./card.css";

const Card = ({ products }) => {
  const [newsToShow, setNewsToShow] = useState(8);

  useEffect(() => {
    setNewsToShow(8);
  }, [products]);

  const loadMoreNews = () => {
    setNewsToShow(newsToShow + 8);
  };

  return (
    <div className="product-card-container">
      {products && products.length > 0 ? (
        <>
          {products.slice(0, newsToShow).map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.name || "Product Image"}
              />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p className="description">
                  {product.description.slice(0, 50) +
                    (product.description.length > 50 ? "..." : "")}
                </p>
                <div className="price-category">
                  <p>Price: ₹{product.price}</p>
                  <p>Category: {product.category}</p>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
          {newsToShow < products.length && (
            <div className="load-more-container">
              <button onClick={loadMoreNews} className="load-more-button">
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="no-products">No Products Available</div>
      )}
    </div>
  );
};

export default Card;

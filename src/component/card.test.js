import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./card";

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    description: "Description for product 1",
    price: 100,
    category: "electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description for product 2",
    price: 200,
    category: "jewelery",
    image: "https://via.placeholder.com/150"
  },
];

describe("Card component", () => {
  test("renders product cards correctly", () => {
    render(<Card products={mockProducts} />);

    // Check if the product titles are rendered
    mockProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  test("renders 'Load More' button when there are more products to show", () => {
    render(<Card products={mockProducts} />);

    // Check if the 'Load More' button is rendered
    const loadMoreButton = screen.getByText("Load More");
    expect(loadMoreButton).toBeInTheDocument();
  });

  test("loads more products when 'Load More' button is clicked", () => {
    render(<Card products={mockProducts} />);

    // Initial check for product titles
    mockProducts.slice(0, 8).forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });

    // Simulate clicking 'Load More' button
    const loadMoreButton = screen.getByText("Load More");
    fireEvent.click(loadMoreButton);

    // Check if more products are rendered
    mockProducts.forEach(product => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });
});

// Search.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./search";

describe("Search component", () => {
  test("renders search input correctly", () => {
    const mockSetSearchQuery = jest.fn();
    const searchQuery = "";

    render(<Search setSearchQuery={mockSetSearchQuery} searchQuery={searchQuery} />);

    // Check if the input element is rendered
    const searchInput = screen.getByPlaceholderText("Search products...");
    expect(searchInput).toBeInTheDocument();
  });

  test("calls setSearchQuery with the correct value when input changes", () => {
    const mockSetSearchQuery = jest.fn();
    const searchQuery = "";

    render(<Search setSearchQuery={mockSetSearchQuery} searchQuery={searchQuery} />);

    // Simulate typing in the input
    const searchInput = screen.getByPlaceholderText("Search products...");
    fireEvent.change(searchInput, { target: { value: "Test" } });

    // Check if setSearchQuery is called with the correct value
    expect(mockSetSearchQuery).toHaveBeenCalledWith("Test");
  });

  test("renders search input with the correct initial value", () => {
    const mockSetSearchQuery = jest.fn();
    const searchQuery = "Initial Value";

    render(<Search setSearchQuery={mockSetSearchQuery} searchQuery={searchQuery} />);

    // Check if the input element has the correct initial value
    const searchInput = screen.getByPlaceholderText("Search products...");
    expect(searchInput.value).toBe("Initial Value");
  });
});

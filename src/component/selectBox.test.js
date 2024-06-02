
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectBox from "./selectBox";

describe("FilterSelect component", () => {
  const options = [
    { value: "", label: "All" },
    { value: "men's clothing", label: "Men Cloths" },
    { value: "jewelery", label: "Jewelery" },
    { value: "electronics", label: "Electronics" },
    { value: "women's clothing", label: "Women Cloths" },
  ];

  test("renders select dropdown correctly", () => {
    const mockOnChange = jest.fn();

    render(<SelectBox options={options} onChange={mockOnChange} />);

    // Check if the select element is rendered
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    // Check if all options are rendered
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test("calls onChange with the correct value when an option is selected", () => {
    const mockOnChange = jest.fn();

    render(<SelectBox options={options} onChange={mockOnChange} />);

    // Simulate selecting an option
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "electronics" } });

    // Check if onChange is called with the correct value
    expect(mockOnChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: "electronics" } }));
  });

  test("renders with the correct initial value", () => {
    const mockOnChange = jest.fn();

    render(<SelectBox options={options} onChange={mockOnChange} />);

    // Check if the select element has the correct initial value
    const selectElement = screen.getByRole("combobox");
    expect(selectElement.value).toBe("");
  });
});

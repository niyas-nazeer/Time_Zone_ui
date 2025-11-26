import React, { useState } from "react";
import "./SortBox.css";

export default function SortBox() {
  const options = [
    "Bestsellers",
    "Price: Low to High",
    "Price: High to Low",
    "Discount",
    "New Arrivals"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Bestsellers");

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="sort-container">
      <span className="sort-label">SORT BY</span>

      <div className="sort-box" onClick={() => setIsOpen(!isOpen)}>
        {selected.toUpperCase()}
      </div>

      {isOpen && (
        <div className="sort-dropdown">
          {options.map((option, index) => (
            <div
              key={index}
              className={`sort-option ${
                selected === option ? "active-option" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import "./Sidebar.css";

const filterData = {
  Brands: ["Amazfit", "Casio","Citizen","Diesel","Fastrack","Fossil","G-shock","Noise","Police","Seiko","Sonata","Timex", "Titan"],
  Movement: ["Automatic", "Quartz", "Mechanical"],
  Gender: ["Men", "Women",],
  Price: ["Under ₹5,000", "₹5,000–₹10,000", "₹10,000–₹15,000", "₹15,000-₹20,000","Above ₹20,000"],
  Discount: ["10% Off", "20% Off", "30% Off", "40% Off", "50% Off","60% AND ABOVE"],
  "Dial Colour": ["Black", "White", "Blue", "Green"],
  "Case Shape": ["Round", "Square", "Rectangle"],
  "Dial Type": ["Analog", "Digital", "Chronograph", "Smart"],
  "Strap Material": ["Leather", "Metal", "Rubber", "Nylon"]
};

export default function SidebarFilters() {
  const categories = Object.keys(filterData);

  // Track open dropdown
  const [openIndex, setOpenIndex] = useState(null);

  // Track selected checkboxes
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCheckboxChange = (category, item) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      const isSelected = current.includes(item);

      return {
        ...prev,
        [category]: isSelected
          ? current.filter((i) => i !== item)
          : [...current, item]
      };
    });
  };

  const clearAll = () => {
    setSelectedFilters({});
  };

  return (
    <div className="sidebar-container">
      <div className="header-row">
        <h3 className="sidebar-title">FILTERS</h3>
        <button className="clear-btn" onClick={clearAll}>
          CLEAR ALL
        </button>
      </div>

      {categories.map((category, idx) => (
        <div key={idx} className="dropdown-section">
          <button className="dropdown-header" onClick={() => toggleDropdown(idx)}>
            <span className="arrow">{openIndex === idx ? "▲" : "▼"}</span>
            <span>{category.toUpperCase()}</span>
          </button>

          {openIndex === idx && (
            <div className="dropdown-content">
              {filterData[category].map((item, i) => (
                <label key={i} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[category]?.includes(item) || false
                    }
                    onChange={() => handleCheckboxChange(category, item)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

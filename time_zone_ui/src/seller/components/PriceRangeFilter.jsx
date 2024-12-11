import React, { useState } from "react";
import { Range } from "react-range";
import "./css/PriceRangeFilter.css";

const PriceRangeFilter = () => {
    const [priceRange, setPriceRange] = useState([0, 0]);

    const handleRangeChange = (values) => {
        setPriceRange(values);
    };

    return (
        <div className="price-range-filter mt-2">
            <h6 className="filter-title mb-4">PRICE</h6>
            <div className="slider-container mb-4">
            <Range
                step={1}
                min={0}
                max={200000}
                values={priceRange}
                onChange={handleRangeChange}
                renderTrack={({ props, children }) => {
                    // Calculate the percentage for the active track
                    const leftPercentage = ((priceRange[0] - 0) / (200000 - 0)) * 100;
                    const rightPercentage = ((priceRange[1] - 0) / (200000 - 0)) * 100;
                    const { key, ...rest } = props;
                    return (
                        <div
                            {...rest}
                            key={key}
                            className="slider-track"
                            style={{
                                ...props.style,
                                background: `linear-gradient(
                                    to right, 
                                    #007bff ${leftPercentage}%, 
                                    #007bff ${rightPercentage}%, 
                                    #ddd ${rightPercentage}% 
                                )`,
                                height: "6px",
                                borderRadius: "3px",
                            }}
                        >
                            {children}
                        </div>
                    );
                }}
                renderThumb={({ props }) => {
                    const {key, ...rest}=props;
                    return(
                        <div
                            {...rest}
                            key={key}
                            className="slider-thumb"
                            style={{
                                ...props.style,
                                backgroundColor: "#007bff",
                                borderRadius: "50%",
                                width: "13px",
                                height: "13px",
                            }}
                        />
                    );
                }}
            />
            </div>
            <div className="price-inputs-box mb-3">
                <input
                    type="number"
                    value={priceRange[0]}
                    id="minCost"
                    onChange={(e) =>
                        setPriceRange([Math.min(Number(e.target.value), priceRange[1]), priceRange[1]])
                    }
                    className="price-input"
                />
                <span className="to-text">to</span>
                <input
                    type="number"
                    value={priceRange[1]}
                    id="maxCost"
                    onChange={(e) =>
                        setPriceRange([priceRange[0], Math.max(Number(e.target.value), priceRange[0])])
                    }
                    className="price-input"
                />
            </div>
        </div>
    );
};

export default PriceRangeFilter;
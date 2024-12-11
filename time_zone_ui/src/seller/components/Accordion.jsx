import React from 'react'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/Accordion.css"
import PropTypes from 'prop-types';

const Accordion = ({title, items, id, isRating, defaultOpen}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  return (
     <>
        <div className="accordion accordion-flush" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={`heading-${id}`}>
                    <button className={`filter-title accordion-button ${defaultOpen ? "" : "collapsed"}`}
                    type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                    aria-expanded={defaultOpen ? "true" : "false"}
                    aria-controls={`collapse-${id}`}>
                      {title}
                    </button>
                </h2>
                <div id={`collapse-${id}`} className={`accordion-collapse collapse ${defaultOpen ? "show" : ""}`}
                    aria-labelledby={`heading-${id}`}>
                    <div className="accordion-body">
                      {title=='BRANDS' && <div className="mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={`Search ${title}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>}
                      {items.map((item,index)=>(
                        <div className="form-check" key={index}>
                          <input type="checkbox" className='form-check-input'
                          id={`checkbox-${id}-${index}`} />
                          <label htmlFor={`checkbox-${id}-${index}`} className='form-check-label'>
                            {isRating ? (
                              <div>
                                {item} {Array(item).fill("⭐").join("")}
                              </div>
                            ) : (
                              <div>{item}</div>
                            )}
                          </label>
                        </div>
                      ))}
                    </div>
                 </div>
            </div>
        </div>
    </>
  )
};

export default Accordion;
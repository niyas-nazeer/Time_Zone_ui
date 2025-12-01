import React from "react";
import { useNavigate } from "react-router-dom";
import "./BrandAds.css";

const brands = [
  { name: "Amazfit", img: "/assets/brand-adds/amazfit add.jpg", link: "/brands/amazfit" },
  { name: "Casio", img: "/assets/brand-adds/casio add.jpg", link: "/brands/casio" },
  { name: "Citizen", img: "/assets/brand-adds/citizen add.jpg", link: "/brands/citizen" },
  { name: "Diesel", img: "/assets/brand-adds/diesel add.jpg", link: "/brands/diesel" },
  { name: "Fastrack", img: "/assets/brand-adds/fastrack add.jpg", link: "/brands/fastrack" },
  { name: "Fossil", img: "/assets/brand-adds/fossil add.jpg", link: "/brands/fossil" },
  { name: "Gshock", img: "/assets/brand-adds/gshock add.jpg", link: "/brands/gshock" },
  { name: "Noise", img: "/assets/brand-adds/noise add.jpg", link: "/brands/noise" },
  { name: "Police", img: "/assets/brand-adds/police add.jpg", link: "/brands/police" },
  { name: "Seiko", img: "/assets/brand-adds/seiko add.jpg", link: "/brands/seiko" },
  { name: "Sonata", img: "/assets/brand-adds/sonata add.jpg", link: "/brands/sonata" },
  { name: "Timex", img: "/assets/brand-adds/timex add.jpg", link: "/brands/timex" },
  { name: "Titan", img: "/assets/brand-adds/titan add.jpg", link: "/brands/titan" },
  
];

export default function BrandAds() {
  const navigate = useNavigate();

  return (
    <div className="brands-grid">
      {brands.map((b, i) => (
        <div
          key={i}
          className="brands-card"
          onClick={() => navigate(b.link)}
        >
          <img src={b.img} alt={b.name} className="brands-img" />
          <div className="brands-label">{b.name}</div>
        </div>
      ))}
    </div>
  );
}

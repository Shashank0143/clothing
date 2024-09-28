import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CategorySection.css";
import image1 from "../../../Image/products/Kurtas/1.jpg"
import image2 from "../../../Image/products/Kurtas/2.JPG"
import image3 from "../../../Image/products/Kurtas/3.JPG"
import image4 from "../../../Image/products/Kurtas/4.JPG"
import image5 from "../../../Image/products/Kurtas/5.JPG"
import image6 from "../../../Image/products/Kurtas/6.JPG"
import image7 from "../../../Image/products/Kurtas/7.JPG"
import image8 from "../../../Image/products/Kurtas/8.JPG"
import image9 from "../../../Image/products/Kurtas/9.JPG"
import image10 from "../../../Image/products/Kurtas/10.JPG"
// import image11 from "../../../Image/products/Kurtas/11.JPG"


const categories = [
  { name: "Men Suits", image: image1 },
  { name: "Women Suits", image: image2 },
  { name: "Blazers", image: image3 },
  { name: "T-Shirts", image: image4 },
  { name: "Formals", image: image5 },
  { name: "Jodhpuri Suits", image: image6 },
  { name: "Kurta Set", image: image7 },
  { name: "Sherwani", image: image8 },
  { name: "Shirts & Trousers", image: image9 },
  { name: "HighWaist Trousers", image: image10 },
];

function CategorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const history = useHistory();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 5 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 5 ? 0 : prevIndex + 1
    );
  };

  const handleCategoryClick = (category) => {
    history.push(`/products?category=${category}`);
  };

  return (
    <div className="category-section">
      <h2>Shop by Category</h2>
      <div className="slider-container">
        <button className="prev-button" onClick={handlePrev}>
        &larr;
        </button>
        <div className="slider">
          {categories.slice(currentIndex, currentIndex + 5).map((category, index) => (
            <div
              key={index}
              className="slider-item"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img src={category.image} alt={category.name} />
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={handleNext}>
        &rarr;
        </button>
      </div>
    </div>
  );
}

export default CategorySection;

import React from "react";
import Homeimage from  "../Assets/homeimage.jpg"
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            Welcome to The Recipe Treasury!
          </h1>
          <p className="primary-text">
          Within these pages, you'll discover a world of flavors, a symphony of tastes, and a collection of culinary delights that will transport you on a gastronomic journey around the globe.
          </p>
          <button className="secondary-button">
            <Link to="/AboutPages/">Recipes <FiArrowRight /></Link>
          </button>
        </div>
        <div className="home-image-section">
        <img src={homeimage} alt="" />
        </div>
    </div>
  );
};

export default Home;
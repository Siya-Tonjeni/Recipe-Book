import React from "react";
// import Homeimage from  "../Assets/homeimage.jpg"
// import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import NavBar from "./NavBar";


const Home = () => {
  return (
    <div className="home-container">
    <NavBar/>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://i.pinimg.com/564x/1e/bf/46/1ebf4650918a9d9e8c2933a04b8944f7.jpg" class="d-block mx-lg-auto img-fluid" alt="Cookies -Image" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome to The Recipe Treasury!</h1>
        <p class="lead">Within these pages, you'll discover a world of flavors, a symphony of tastes, and a collection of culinary delights that will transport you on a gastronomic journey around the globe.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link to="/recipes"><button type="button" class="btn btn-dark btn-lg px-4 me-md-2">Recipes </button></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Home;
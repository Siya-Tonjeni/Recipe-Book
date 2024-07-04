import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const RecipesList = ({ recipes }) => {
  return (
    <div>
    <NavBar/>
    <div className="recipes-list">
    <div className="container" style={{position: "relative", left: "20%"}}>
  <h2>Recipes</h2>
  <p>All the yummy recipes right here</p>
  </div>
  {recipes && (
    <ul className="row" style={{listStyle: "none"}}>
      {recipes.map((recipe) => (
        <li key={recipe.id} className="col-md-4">
        <Link to={`/recipe/${recipe.id}`}>
          <RecipeCard key={recipe.id} recipe={recipe} />
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>
</div>
  );
};

function RecipeCard({ recipe }) {
  const myStyle= {
    width: "16rem",
    marginTop: "100px",
    marginRight: "0px",
    marginLeft: "0px",
    padding: "0px"
  }

    return (
      <div className="container" style={myStyle}>
      <div className="card" style={{padding: "0px"}}>
        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">{recipe.description}</p>
        </div>
      </div>
      </div>
    );
  }

export default RecipesList;



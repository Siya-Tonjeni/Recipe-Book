import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


const RecipeDetail = ({ recipes }) => {
  const { id } = useParams();
  const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!selectedRecipe) {
    return <p>Recipe not found!</p>;
  }

  return (
  <div>
  <NavBar/>
    <div class="container col-xxl-8 px-4 py-5">
<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
  <div class="col-10 col-sm-8 col-lg-6">
  <h3>Ingredients:</h3>
      <ul>
        {selectedRecipe.ingredient.map((ingredients) => (
          <li key={ingredients}>{ingredients}</li>
        ))}
      </ul>

      <h3>Instructions:</h3>
      <ol>
        {selectedRecipe.instructions.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
  </div>
  <div class="recipe-detail col-lg-6">
  <Link to={`/recipes`}><button className='btn btn-dark'>Back to recipes</button></Link>
  <h2>{selectedRecipe.title}</h2>
  <p>{selectedRecipe.description}</p>
      <img src={selectedRecipe.image} alt={selectedRecipe.title}  style={{width: "80%", height: "80%"}}/>
    </div>
  </div>
</div>
</div>
  );
};

export default RecipeDetail;






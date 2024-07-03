import React from 'react';
import { useParams } from 'react-router-dom';
import Assets from 'react-dom/img';

const RecipeDetail =({recipes}) => {
    const {id} = useParams();
    const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(id));

    if(!selectedRecipe){
        return <p>Recipe not found!</p>
    }

    return(
        <div className="recipe-detail">
        <h2>{selectedRecipe.title}</h2>
        {selectedRecipe.image && <img src={selectedRecipe.image} alt={selectedRecipe.title} />}
        <h3>Ingredients:</h3>
        <ul>
        {selectedRecipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {selectedRecipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <button>
        <Link to="/">Back to Recipes</Link>
      </button>
        </div>
    );
};

export default RecipeDetail,
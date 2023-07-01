import React from "react";
import "./Recipe.css";
import { GrFormNext } from "react-icons/gr";

import { useNavigate } from "react-router";
import { useRecipe } from "../../context/RecipeProvider";

function Recipe({ recipe, id }) {
  const navigate = useNavigate();
  const { state, dispatch } = useRecipe();
  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  return (
    <div>
      <div class="card">
        <img class="card-img" src={recipe.image} alt="" />
        <div class="card-info">
          <div class="card-title">
            <div>
              <h3>{recipe.name}</h3>
            </div>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <div class="recipe-details">
            <h6 class="">Cusine Type:{recipe.cusineType}</h6>
            <p class="">
              Ingredients:
              <span onClick={() => navigate(`/recipe/${id}`)}>
                See Recipe <GrFormNext />
              </span>
            </p>
            <p class="">
              Instruction:
              <span onClick={() => navigate(`/recipe/${id}`)}>
                See Recipe <GrFormNext />
              </span>
            </p>
          </div>
        </div>
        <div class="bottom-btn cart">
          <button class="btn default add-cart" onClick={handleDelete}>
            Delete Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recipe;

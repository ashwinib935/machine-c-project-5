import React, { useState } from "react";
import "./Home.css";
import Recipe from "../../component/recipe/Recipe";
import { useRecipe } from "../../context/RecipeProvider";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Filter from "../../component/Filter/Filter";
function Home() {
  const { state, dispatch } = useRecipe();
  const [showModal, setShowModal] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState({
    name: "",
    cusineType: "",
    ingredients: ["rice", "dal", "sault", "oil", "water", "masala"],
    instruction: "",
    image: "https://picsum.photos/id/56/150",
  });
  const handleAddRecipe = () => {
    dispatch({
      type: "CREATE_RECIPE",
      payload: recipeDetails,
    });
    setShowModal(false);
    console.log("data:", state.data);
    localStorage.setItem("recipe", JSON.stringify(state.data));
  };
  //   var retrievedObject = localStorage.getItem("recipe");

  //   // CONVERT STRING TO REGULAR JS OBJECT
  //   var parsedObject = JSON.parse(retrievedObject);

  return (
    <div>
      <div className="main">
        <h1>Home</h1>
        <Filter />
        <div className="recipe-container">
          {state.data?.map((recipe, index) => (
            <Recipe recipe={recipe} key={index} id={index} />
          ))}
          <div>
            <button className="btn-add" onClick={() => setShowModal(true)}>
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>
      </div>
      {showModal ? (
        <div className="modal">
          <form action="" className="recipeform">
            <label>
              Name
              <input
                className="text-input"
                required
                value={recipeDetails.name}
                placeholder="Name"
                onChange={(e) =>
                  setRecipeDetails({ ...recipeDetails, name: e.target.value })
                }
              />
            </label>
            <label>
              Cusine Type
              <input
                className="text-input"
                required
                value={recipeDetails.cusineType}
                placeholder="Name"
                onChange={(e) =>
                  setRecipeDetails({
                    ...recipeDetails,
                    cusineType: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Instruction
              <input
                className="text-input"
                required
                value={recipeDetails.instruction}
                placeholder="Name"
                onChange={(e) =>
                  setRecipeDetails({
                    ...recipeDetails,
                    instruction: e.target.value,
                  })
                }
              />
            </label>
            <button onClick={handleAddRecipe} className="btn-addrecipe">
              Add Recipe
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="btn-addrecipe"
            >
              Cancle
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Home;

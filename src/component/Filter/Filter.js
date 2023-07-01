import React from "react";
import { useRecipe } from "../../context/RecipeProvider";

function Filter() {
  const { state, dispatch } = useRecipe();
  return (
    <div className="filter">
      <input
        style={{ margin: "4px" }}
        type="text"
        placeholder="Search By Name"
        value={state.filter.search}
        onChange={(e) =>
          dispatch({ type: "INPUT_SEARCH", payload: e.target.value })
        }
      />
      <fieldset>
        <legend>Filter by</legend>
        <label>
          <input
            type="radio"
            name="sort"
            value={state.filter.sortType}
            onClick={(e) => dispatch({ type: "SORT_TYPE", payload: "name" })}
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={(e) =>
              dispatch({ type: "SORT_TYPE", payload: "ingredients" })
            }
          />
          Ingredients
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={(e) => dispatch({ type: "SORT_TYPE", payload: "cusine" })}
          />
          Cusine
        </label>
      </fieldset>
    </div>
  );
}

export default Filter;

import React, { createContext, useContext, useReducer, useState } from "react";
import { recipedata } from "../data/recipedata";
export const RecipeContext = createContext();
function RecipeProvider({ children }) {
  //const [recipes, setRecipes] = useState(recipedata);

  const filterData = recipedata;
  const handleFilter = (state, action) => {
    switch (action.type) {
      case "INPUT_SEARCH":
        return {
          ...state,
          filter: { ...state.filter, search: action.payload },
        };
      case "SORT_TYPE":
        const newObjForSort = { ...state.filter, sortType: action.payload };
        state = { ...state, filter: newObjForSort };
        if (state.filter.sortType === "name") {
          const newDataBySearch = recipedata.filter((product) =>
            product.name
              .toLowerCase()
              .includes(state.filter.search.toLowerCase())
          );
          return { ...state, data: newDataBySearch };
        } else if (state.filter.sortType === "cusine") {
          const newDataBySearch = recipedata.filter((product) =>
            product.cusineType
              .toLowerCase()
              .includes(state.filter.search.toLowerCase())
          );
          return { ...state, data: newDataBySearch };
        } else if (state.filter.sortType === "ingredients") {
          const newDataBySearch = recipedata.filter((product) =>
            product.ingredients.some((ele) =>
              ele.toLowerCase().includes(state.filter.search.toLowerCase())
            )
          );
          return { ...state, data: newDataBySearch };
        }
        return state.data;
      case "CREATE_RECIPE":
        const newData = [...state.data, action.payload];
        console.log("newData", newData);
        return { ...state, data: newData };
      default:
        return state.data;
    }
  };
  const [state, dispatch] = useReducer(handleFilter, {
    data: recipedata,
    filter: {
      search: "Idli",
      sortType: "name",
    },
  });
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
export const useRecipe = () => useContext(RecipeContext);

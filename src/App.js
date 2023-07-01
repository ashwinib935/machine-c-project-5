import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home/Home";
import RecipeDetails from "./component/RecipeDetails/RecipeDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;

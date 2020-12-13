import React, { useEffect, useState } from 'react';
import "./App.css";
import Recipe from './Recipe';
require('dotenv').config({path: __dirname + '/.env'})

function App() {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('cake');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={getSearch} >
        <input type="text" className="search-bar" placeholder="Enter name of Dish" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} calories={Math.floor(recipe.recipe.calories)} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} title={recipe.recipe.label} />
        ))}
      </div>
    </div>
  );
};

export default App

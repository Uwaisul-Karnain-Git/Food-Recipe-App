import { useState, useEffect } from 'react';
import Recipe from './components/Recipe';
import './App.css';

function App() {

  const APP_ID = '7005d1de';
  const APP_KEY = '79c873000be556b03b4a465ce50d5b44';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect (() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setRecipes(data.hits);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
 
  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>

        <input className='search-bar' 
          type='text'
          value={search} 
          onChange={e => setSearch(e.target.value)}>            
        </input>

        <button className='search-button' type='submit'>
          Search
        </button>

      </form>

      <div className='recipes'>
        {/* Here, instead of adding {}, we have used (), because we want to return some html */}
        {/* By adding a 'key' prop, we can let React render only the changed elements instead of redering all the elements in the iterator */}
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label} 
            recipe={recipe}          
          />
        ))}
      </div>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroesList() {
  const [heroName, setHeroName] = useState('');
  const [foundHeroes, setFoundHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const resp = await fetch(`https://www.superheroapi.com/api.php/6735566433239595/search/${heroName}`);
    const data = await resp.json();
    setFoundHeroes(data.results);
    setIsLoading(false)
  };

  return (
    !isLoading ? (
    <>
      <h1>Find your Hero</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />
        <button type="submit">Search the Hero</button>
      </form>
      <div style={{marginTop: '1rem'}} className='heroesList'>
        {foundHeroes ?  
        foundHeroes.map((hero) => (
          <div key={hero.id}>
            <Link to={`/heroes/${hero.id}`} className='heroLink'>
              <img src={hero.image.url}/> <h5>{hero.name}</h5>
            </Link>
          </div>
        )) : 
          <div>I found no heroes! Try <em>Batman</em></div>
        }
      </div>
    </>
     ) : (
    <div>Loading...</div>)
  )
}

export default HeroesList;

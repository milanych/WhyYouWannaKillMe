import React, { useState } from 'react';

function Fighter({ selectedHero, setSelectedHero }) {
  const [heroName, setHeroName] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchHeroes = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    const resp = await fetch(`https://www.superheroapi.com/api.php/6735566433239595/search/${heroName}`);
    const data = await resp.json();
    setHeroes(data.results);
    setIsLoading(false);
  };

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  return (
    <>
      <form onSubmit={fetchHeroes}>
        <input
          type="text"
          placeholder="Search the Hero"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className='heroesList'>
        {heroes ? heroes.map((hero) => (
          <div key={hero.id}>
            <div
              className={`heroLink ${selectedHero && selectedHero.id === hero.id ? 'selected' : ''}`}
              onClick={() => handleHeroClick(hero)}
            >
              <img src={hero.image.url}/> <h5>{hero.name}</h5>
            </div>
          </div>
        )) : <div>I found no heroes! Try <em>Batman</em></div>
        }
      </div>
    </>
  );
}

export default Fighter;

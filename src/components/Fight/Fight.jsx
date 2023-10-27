import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Fight() {
  const [heroName1, setHeroName1] = useState('');
  const [heroName2, setHeroName2] = useState('');
  const [heroes1, setHeroes1] = useState([]);
  const [heroes2, setHeroes2] = useState([]);
  const [selectedHero1, setSelectedHero1] = useState(null);
  const [selectedHero2, setSelectedHero2] = useState(null);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [winner, setWinner] = useState('');

  const fetchHeroes1 = async (e) => {
    e.preventDefault()
    setIsLoading1(true);
    const resp = await fetch(`https://www.superheroapi.com/api.php/6735566433239595/search/${heroName1}`);
    const data = await resp.json();
    setHeroes1(data.results);
    setIsLoading1(false);
  };

  const fetchHeroes2 = async (e) => {
    e.preventDefault()
    setIsLoading2(true);
    const resp = await fetch(`https://www.superheroapi.com/api.php/6735566433239595/search/${heroName2}`);
    const data = await resp.json();
    setHeroes2(data.results);
    setIsLoading2(false);
  };

  const handleHero1Click = (hero) => {
    setSelectedHero1(hero);
  };
  const handleHero2Click = (hero) => {
    setSelectedHero2(hero);
  };

  const comparePowerstats = () => {
    if (selectedHero1 && selectedHero2) {
      const powerstat1 = selectedHero1.powerstats;
      const powerstat2 = selectedHero2.powerstats;

      let hero1Score = 0;
      let hero2Score = 0;

      for (const stat in powerstat1) {
        if (powerstat1[stat] > powerstat2[stat]) {
          hero1Score++;
        } else if (powerstat1[stat] < powerstat2[stat]) {
          hero2Score++;
        }
      }

      if (hero1Score > hero2Score) {
        setWinner(`${selectedHero1.name} wins!`);
      } else if (hero1Score < hero2Score) {
        setWinner(`${selectedHero2.name} wins!`);
      } else {
        setWinner("It's a tie!");
      }
    }
  };

  return (
    <>
      <h1>Choose two fighters</h1>
      <div className="fighter-selection">
        <div className="column">
          <h2>Hero 1</h2>
          <form onSubmit={fetchHeroes1}>
            <input
              type="text"
              placeholder="Search"
              value={heroName1}
              onChange={(e) => setHeroName1(e.target.value)}
            />
            <button type="submit">Search the Hero</button>
          </form>
          <div style={{marginTop: '1rem'}} className='heroesList'>
            {heroes1 ? heroes1.map((hero) => (
              <div key={hero.id}>
                <div 
                  className={`heroLink ${selectedHero1 && selectedHero1.id === hero.id ? 'selected' : ''}`}
                  onClick={() => handleHero1Click(hero)}
                >
                  <img src={hero.image.url}/> 
                  <h5>{hero.name}</h5>
                </div>
              </div>
            )): "no heroes found!"}
          </div>
        </div>
        <div className="column">
          <h2>Hero 2</h2>
          <form onSubmit={fetchHeroes2}>
            <input
              type="text"
              placeholder="Search"
              value={heroName2}
              onChange={(e) => setHeroName2(e.target.value)}
            />
            <button type="submit">Search the Hero</button>
          </form>
          <div style={{marginTop: '1rem'}} className='heroesList'>
            {heroes2 ? heroes2.map((hero) => (
              <div key={hero.id}>
                <div 
                  className={`heroLink ${selectedHero2 && selectedHero2.id === hero.id ? 'selected' : ''}`}
                  onClick={() => handleHero2Click(hero)}
                >
                  <img src={hero.image.url}/> 
                  <h5>{hero.name}</h5>
                </div>
              </div>
            )): "no heroes found!"}
          </div>
        </div>
      </div>
      <button onClick={comparePowerstats}>Fight!</button>
      {winner && <p>{winner}</p>}
    </>
  );
}

export default Fight;

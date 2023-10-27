import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HeroCard() {
  const {id} = useParams()
  const [hero, setHero] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      const resp = await fetch(`https://www.superheroapi.com/api.php/6735566433239595/${id}`);
      const data = await resp.json();
      setHero(data);
      setIsLoading(false);
    };

    fetchHero();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : hero ? (
        <>
          <h1>{hero.name}</h1>
        <div className="heroCard">
          <div class="col">
          <img 
            src={hero.image.url} 
            alt={hero.name}
            className="heroImage"
          />
          </div>
          <div class="col">
          <div className="heroStats">
          <h3>Powerstats:</h3>
            <p>Intelligence: {hero.powerstats.intelligence}</p>
            <p>Strength: {hero.powerstats.strength}</p>
            <p>Speed: {hero.powerstats.speed}</p>
            <p>Durability: {hero.powerstats.durability}</p>
            <p>Power: {hero.powerstats.power}</p>
            <p>Combat: {hero.powerstats.combat}</p>
          </div>
          </div>
        </div>
          <ul className="heroData">
          <li>Alignment: {hero.biography.alignment}</li>
          <li>Gender: {hero.appearance.gender}</li>
          <li>Race: {hero.appearance.race}</li>
          <li>Height: {hero.appearance.height.join(' / ')}</li>
          <li>Weight: {hero.appearance.weight.join(' / ')}</li>
          </ul>
</>
      ) : (
        <div>No hero found!</div>
      )}
    </>
  );
}

export default HeroCard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fighter from "../Fighter/Fighter";
import fightImg from "../../assets/img/fight.png"

function Fight() {
  const [selectedHero1, setSelectedHero1] = useState(null);
  const [selectedHero2, setSelectedHero2] = useState(null);
  const [winner, setWinner] = useState('');

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
        <div className="col">
          <h2>Hero 1</h2>
          {/* {selectedHero1 && <p>{selectedHero1.name} is selected</p>} */}
          <Fighter selectedHero={selectedHero1} setSelectedHero={setSelectedHero1} />
        </div>
        <div className="col">
          <h2>Hero 2</h2>
          <Fighter selectedHero={selectedHero2} setSelectedHero={setSelectedHero2} />
          {/* {selectedHero2 && <p>{selectedHero2.name} is selected</p>} */}
        </div>
      </div>
      {selectedHero1 && selectedHero2 ? <img src={fightImg} onClick={comparePowerstats}/> : ''}
      {winner && <p>{winner}</p>}
    </>
  );
}

export default Fight;

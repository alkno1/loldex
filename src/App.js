import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./myCss/grid.css";
import "./myCss/styles.css";
import Header from "./myComponents/header";
import CardsArea from "./myComponents/cardsArea";

function App() {
  const [generalChampionsInfo, setGeneralChampionsInfo] = useState();
  const [championListToShow, setChampionListToShow] = useState([]);

  //fetching part
  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setGeneralChampionsInfo(data);
        const championNameList = Object.keys(data.data);
        //championNameList innehåller alla champion names i en array
        setChampionListToShow(championNameList);
      });
  }, []);
  //fetching part end

  if (generalChampionsInfo === undefined) {
    return null;
  }

  return (
    <div>
      <Header
        generalChampionsInfo={generalChampionsInfo}
        setChampionListToShow={setChampionListToShow}
      />
      <CardsArea
        generalChampionsInfo={generalChampionsInfo}
        championListToShow={championListToShow}
      />
    </div>
  );
}

export default App;

import React from "react";
import ChampionCard from "./championCard";

function CardsArea(props) {
  const championCards = props.championListToShow.map((champion) => (
    <div key={champion}>
      <ChampionCard
        generalChampionsInfo={props.generalChampionsInfo}
        champion={champion}
      />
    </div>
  ));

  return (
    <div className="grid-outerCardsContainer cardsArea">{championCards}</div>
  );
}

export default CardsArea;

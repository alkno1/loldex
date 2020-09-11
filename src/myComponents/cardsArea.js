import React from "react";
import ChampionCard from "./championCard";

function CardsArea(props) {
  //championListToShow ska vara länken till de olika listorna till ex tagsen i filter med ex if-sats
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

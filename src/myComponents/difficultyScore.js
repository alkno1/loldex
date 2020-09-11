import React from "react";

function DifficultyScore(props) {
  //display difficulty with the text; easy 1-3, average 4-6, hard 7-8, severe 9-10
  let difficulty = "";
  const difficultyScore =
    props.generalChampionsInfo.data[props.champion].info.difficulty;

  if (difficultyScore < 4) {
    difficulty = "Easy";
  }
  if (difficultyScore > 3 && difficultyScore < 7) {
    difficulty = "Average";
  }
  if (difficultyScore > 6 && difficultyScore < 9) {
    difficulty = "Hard";
  }
  if (difficultyScore > 8) {
    difficulty = "Severe";
  }

  return <>{difficulty}</>;
}

export default DifficultyScore;

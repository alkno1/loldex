import React, { useState, useEffect } from "react";

function FetchMainJson() {
  const [generalChampionsInfo, setGeneralChampionsInfo] = useState();

  //fetching part
  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/10.13.1/data/en_US/champion.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setGeneralChampionsInfo(data);
      });
  }, []);
  //fetching part end

  if (generalChampionsInfo === undefined) {
    return null;
  }

  return { generalChampionsInfo };
}
export default FetchMainJson;

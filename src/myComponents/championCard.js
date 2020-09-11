import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ChampionModal from "./championModal";
import TagGroup from "./tagGroup";
import DifficultyScore from "./difficultyScore";

function ChampionCard(props) {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);

  const champSplashAddressPrefix =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
  const champSplashAddressSuffix = "_0.jpg";

  return (
    <>
      <Card
        className="ChangeCursorToPointer"
        style={{ width: "18rem" }}
        onClick={() => setModalShow(true)}
      >
        <Card.Img
          variant="top"
          src={`${champSplashAddressPrefix}${props.champion}${champSplashAddressSuffix}`}
        />
        <Card.Body>
          <div className="grid-card-title">
            <div className="cardChampionName">
              {props.generalChampionsInfo.data[props.champion].name}{" "}
            </div>
            <div className="cardChampionTagGroup">
              <TagGroup
                generalChampionsInfo={props.generalChampionsInfo}
                champion={props.champion}
              />
            </div>
          </div>
          <div className="cardSubTitle">
            {props.generalChampionsInfo.data[props.champion].title}
          </div>
          <div>
            <DifficultyScore
              generalChampionsInfo={props.generalChampionsInfo}
              champion={props.champion}
            />
          </div>
        </Card.Body>
      </Card>

      <ChampionModal
        modalShow={modalShow}
        handleClose={handleClose}
        generalChampionsInfo={props.generalChampionsInfo}
        champion={props.champion}
      />
    </>
  );
}

export default ChampionCard;

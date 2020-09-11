import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import TagGroup from "./tagGroup";
import SkinName from "./skinName";
import Lore from "./lore";

function ChampionModal(props) {
  const [individualChampionInfo, setIndividualChampionInfo] = useState();
  const individualChampionAddressPrefix =
    "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/";
  const individualChampionAddressSuffix = ".json";

  //fetching part
  useEffect(() => {
    fetch(
      `${individualChampionAddressPrefix}${props.champion}${individualChampionAddressSuffix}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIndividualChampionInfo(data);
      });
  }, [props.champion]);

  //fetching part end

  if (individualChampionInfo === undefined) {
    return null;
  }

  const individualChampionAllyTips = individualChampionInfo.data[
    props.champion
  ].allytips.map((allytip) => <li key={allytip}>{allytip}</li>);

  const individualChampionEnemyTips = individualChampionInfo.data[
    props.champion
  ].enemytips.map((enemytip) => <li key={enemytip}>{enemytip}</li>);

  //Skin splash

  const champSplashAddressPrefix =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
  const champSplashAddressUnderscore = "_";
  const champSplashAddressSuffix = ".jpg";

  const individualChampionSkins = individualChampionInfo.data[
    props.champion
  ].skins.map((skin) => (
    <Carousel.Item key={skin.id}>
      <img
        className="d-block w-100"
        src={`${champSplashAddressPrefix}${props.champion}${champSplashAddressUnderscore}${skin.num}${champSplashAddressSuffix}`}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="splashTextAlpha">
          <SkinName skin={skin} />
        </h3>
        <div className="lore splashTextAlpha">
          <Lore
            skin={skin}
            lore={individualChampionInfo.data[props.champion].lore}
          />
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <Modal show={props.modalShow} onHide={props.handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>
            <Carousel>{individualChampionSkins}</Carousel>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
          <br />
          Ally tips:
          <ol>{individualChampionAllyTips}</ol>
          Enemy tips:
          <ol>{individualChampionEnemyTips}</ol>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChampionModal;

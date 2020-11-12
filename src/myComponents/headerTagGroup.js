import React, { useState, useCallback, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import { AllTagLists } from "./allTagLists";

let initialState = {
  all: true,
  tank: false,
  fighter: false,
  assassin: false,
  marksman: false,
  mage: false,
  support: false,
};

function HeaderTagGroup(props) {
  const [badgeState, setBadgeState] = useState(initialState);

  useEffect(() => {
    if (props.searchInput === "") {
    } else {
      const newState = Object.assign({}, initialState);
      newState.all = false;
      newState.tank = false;
      newState.fighter = false;
      newState.assassin = false;
      newState.marksman = false;
      newState.mage = false;
      newState.support = false;
      setBadgeState(newState);
    }
  }, [setBadgeState, props]);

  const handleClick = useCallback(
    (name) => (event) => {
      // Using the initial state here to reset all back to false
      const newState = Object.assign({}, initialState);

      // Find the one we clicked and set to true
      switch (name) {
        case "All":
          newState.all = true;
          props.setSearchInput("");
          props.setChampionListToShow(props.championNameList);
          break;
        case "Tank":
          newState.tank = true;
          newState.all = false;
          props.setSearchInput("");
          props.setChampionListToShow(AllTagLists(props, name));
          break;
        case "Fighter":
          newState.fighter = true;
          newState.all = false;
          props.setSearchInput("");
          props.setChampionListToShow(AllTagLists(props, name));
          break;
        case "Assassin":
          newState.assassin = true;
          newState.all = false;
          props.setSearchInput("");
          props.setChampionListToShow(AllTagLists(props, name));
          break;
        case "Marksman":
          newState.marksman = true;
          newState.all = false;
          props.setSearchInput("");
          props.setChampionListToShow(AllTagLists(props, name));
          break;
        case "Mage":
          newState.mage = true;
          newState.all = false;
          props.setSearchInput("");
          props.setChampionListToShow(AllTagLists(props, name));
          break;
        case "Support":
          newState.support = true;
          newState.all = false;
          props.setSearchInput("");
          props.setChampionListToShow(AllTagLists(props, name));

          break;
        default:
          break;
      }

      //Update the state
      setBadgeState(newState);
    },
    [setBadgeState, props]
  );

  return (
    <>
      <Badge
        onClick={handleClick("All")}
        variant={badgeState.all ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        All Champions
      </Badge>{" "}
      <Badge
        onClick={handleClick("Tank")}
        variant={badgeState.tank ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        Tank
      </Badge>{" "}
      <Badge
        onClick={handleClick("Fighter")}
        variant={badgeState.fighter ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        Fighter
      </Badge>{" "}
      <Badge
        onClick={handleClick("Assassin")}
        variant={badgeState.assassin ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        Assassin
      </Badge>{" "}
      <Badge
        onClick={handleClick("Marksman")}
        variant={badgeState.marksman ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        Marksman
      </Badge>{" "}
      <Badge
        onClick={handleClick("Mage")}
        variant={badgeState.mage ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        Mage
      </Badge>{" "}
      <Badge
        onClick={handleClick("Support")}
        variant={badgeState.support ? "info" : "secondary"}
        className="ChangeCursorToPointer"
      >
        Support
      </Badge>{" "}
    </>
  );
}

export default HeaderTagGroup;

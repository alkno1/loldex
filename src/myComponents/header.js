import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import HeaderTagGroup from "./headerTagGroup";

function Header(props) {
  const [searchInput, setSearchInput] = useState("");

  const championNameList = Object.keys(props.generalChampionsInfo.data);

  function handleChange(e) {
    //Update our state
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    const championNameList = Object.keys(props.generalChampionsInfo.data);
    const championRealNames = championNameList.map(
      (champion) => props.generalChampionsInfo.data[champion].name
    );

    //Same as championNameList but made in a different way
    const championFakeNames = championNameList.map(
      (champion) => props.generalChampionsInfo.data[champion].id
    );

    const searchInputList = [];
    //Takes the input from (searchInput) and pushes it into a list
    for (const name of championRealNames) {
      //if empty push nothing
      if (searchInput === "") {
      } else if (
        //name is converted to lower- and uppercase, respectively
        //and checks if searchInput is included in name
        name.includes(searchInput) ||
        name.toLowerCase().includes(searchInput) ||
        name.toUpperCase().includes(searchInput)
      ) {
        //push input (real name/s)
        searchInputList.push(name);
      }
    }

    const searchInputListFakeNames = [];

    //Takes the resulting searchInputList[] that contains the champions' real name,
    //and compares it to the fake names in championFakeNames and pushes the new result into searchInputListFakeNames[]
    //so you get the right champion/s when you search
    for (const name of searchInputList) {
      for (const fakeName of championFakeNames) {
        if (name === props.generalChampionsInfo.data[fakeName].name) {
          searchInputListFakeNames.push(fakeName);
        }
      }
    }

    const setChampionListToShow = props.setChampionListToShow;

    if (searchInput === "") {
      setChampionListToShow(championNameList);
    } else {
      setChampionListToShow(searchInputListFakeNames);
    }
  }, [
    searchInput,
    props.setChampionListToShow,
    props.generalChampionsInfo.data,
  ]);

  return (
    <>
      <div className="grid-header headerbg">
        <div className="grid-header-badge-group">
          <HeaderTagGroup
            generalChampionsInfo={props.generalChampionsInfo}
            championNameList={championNameList}
            setChampionListToShow={props.setChampionListToShow}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <div className="grid-header-searchbar">
          <Form>
            <Form.Group controlId="searchChampionName">
              <Form.Control
                //autocomplete="off" turns off input history
                autoComplete="off"
                onChange={handleChange}
                type="search"
                placeholder="Enter champion name"
                className="searchbarLength searchbarAlignment"
                value={searchInput}
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Header;

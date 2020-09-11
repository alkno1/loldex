export const AllTagLists = (props, name) => {
  const allTanks = [];
  const allFighters = [];
  const allAssassins = [];
  const allMarksman = [];
  const allMage = [];
  const allSupport = [];

  for (const name in props.generalChampionsInfo.data) {
    for (const tag of props.generalChampionsInfo.data[name].tags) {
      if (tag === "Tank") {
        allTanks.push(name);
      }
      if (tag === "Fighter") {
        allFighters.push(name);
      }
      if (tag === "Assassin") {
        allAssassins.push(name);
      }
      if (tag === "Marksman") {
        allMarksman.push(name);
      }
      if (tag === "Mage") {
        allMage.push(name);
      }
      if (tag === "Support") {
        allSupport.push(name);
      }
    }
  }

  if (name === "Tank") {
    return allTanks;
  }
  if (name === "Fighter") {
    return allFighters;
  }
  if (name === "Assassin") {
    return allAssassins;
  }
  if (name === "Marksman") {
    return allMarksman;
  }
  if (name === "Mage") {
    return allMage;
  }
  if (name === "Support") {
    return allSupport;
  }
};

import React from "react";

function Lore(props) {
  let defaultSkinLore = "";

  if (props.skin.name === "default") {
    defaultSkinLore = props.lore;
  } else {
    defaultSkinLore = "";
  }

  return <>{defaultSkinLore}</>;
}

export default Lore;

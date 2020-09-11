import React from "react";

function SkinName(props) {
  let defaultSkinName = "";

  if (props.skin.name === "default") {
    defaultSkinName = "Normal skin";
  } else {
    defaultSkinName = props.skin.name;
  }

  return <>{defaultSkinName}</>;
}

export default SkinName;

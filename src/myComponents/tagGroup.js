import React from "react";
import Badge from "react-bootstrap/Badge";
import Spacer from "./spacer";

function TagGroup(props) {
  const championTagBadges = props.generalChampionsInfo.data[
    props.champion
  ].tags.map((tag) => (
    <span key={tag}>
      <Badge variant="secondary">{tag}</Badge> <Spacer />{" "}
    </span>
  ));

  return <>{championTagBadges}</>;
}

export default TagGroup;

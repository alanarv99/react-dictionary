import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="synonyms">
        Synonyms: <li>{props.synonyms}</li>{" "}
      </span>
    );
  } else {
    return <span className="noSynonym">Synonyms not available</span>;
  }
}

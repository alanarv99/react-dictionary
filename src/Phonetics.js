import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <h4>/ {props.phonetics.phonetic} /</h4>
    </div>
  );
}

import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2 className="text-capitalize">{props.results.word}</h2>
        <Phonetics phonetics={props.results} />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

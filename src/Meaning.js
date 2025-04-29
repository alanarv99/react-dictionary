import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  function Examples() {
    if (props.meaning.example) {
      return <span className="example">Example: {props.meaning.example} </span>;
    } else return <span className="noExample">Example not available</span>;
  }
  console.log({ props });
  return (
    <div className="Meaning">
      <h4 className="partOfSpeech">{props.meaning.partOfSpeech}</h4>
      <div>
        <p>
          <span className="definition font-weight-bold">
            Definition: {props.meaning.definition}
          </span>
          <br />
          {Examples()}
          <br />
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
  }

  const key = "260420cae416f4dteddo330fbd8c9c7b";
  let url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;

  axios.get(url).then(handleResponse);

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="What does that word even mean?"
          className="searchBar"
          onChange={handleWordChange}
        />
        <input type="submit" value="Find out" />
      </form>
    </div>
  );
}

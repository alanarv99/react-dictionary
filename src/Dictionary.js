import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }

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

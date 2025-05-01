import React, { useState } from "react";
import Results from "./Results";
import Images from "./Images";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [images, setImages] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let wordKey = "260420cae416f4dteddo330fbd8c9c7b";
    let wordUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${wordKey}`;
    axios.get(wordUrl).then(handleResponse);

    let imageKey = "260420cae416f4dteddo330fbd8c9c7b";
    let imageUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageKey}`;
    axios.get(imageUrl).then(handleImageResponse);
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
        <input type="submit" value="Find out" className="findOut" />
      </form>
      <Results results={results} />
      <Images images={images} />
    </div>
  );
}

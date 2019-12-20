import React, { useEffect, useState } from "react";
import ChararacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
    })
    .catch(err => console.log("this is an error", err))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => 
        <ChararacterCard character={character}/> )}
    </section>
  );
}

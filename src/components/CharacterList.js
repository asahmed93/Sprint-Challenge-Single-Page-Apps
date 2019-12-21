import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [chars, setChars] =useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      setChars(res.data.results)
    })
    .catch(err => console.log(err))

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      
      {chars.map((char, index) =>(
        <CharacterCard key={index} char={char}/>
      ))}
    </section>
  );
}
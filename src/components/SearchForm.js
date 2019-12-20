import React, { useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const newSearch = () => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setSearchResults(res.data.results)
    })
  }
  


  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  return (
    <section className="search-form">
      <form onSubmit={(event) => {
        event.preventDefault();
        newSearch(name)
      }}>
        <input onChange={handleInputChange}
        placeholder="name"
        value={name}
        name="name"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((character,index) => <CharacterCard key={index} character={character}/>)}
      </div>
    </section>
  );
}

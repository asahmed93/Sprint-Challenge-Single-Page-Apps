import React, { useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { FormGroup, Input} from 'reactstrap';

export default function SearchForm() {

  const [chars, setChars] =useState([])
  const [search, setSearch] = useState("")

 
 

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then(res => {
      setChars(res.data.results);
    })
    .catch(err => {
      console.error(err);
    })
  }, [search])

  const handleChange = e => {
    e.preventDefault(e.target.value)
    setSearch(e.target.value)
  };

  return (
    <section className="search-form">
     <FormGroup >
       <Input
       placeholder="Search"
       value={search}
       onChange={handleChange}
       />
     </FormGroup>
     {chars.map((char, index) =>
     <CharacterCard key={index} char={char}/>)}
    </section>
  );
}

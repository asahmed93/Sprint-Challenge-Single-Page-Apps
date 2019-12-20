import React from "react";

export default function CharacterCard(props) {
  const char = props.character
  return(
    <div key={char.id}> 
      <p>{char.name}</p>
      <img src={char.image} alt="character"/>
    </div>
  )
}

import React from "react";

export default function CharacterCard(props) {
  const char = props.character
  return(
    <div> 
      <p>{char.image}</p>
      <p>{char.name}</p>
    </div>
  )
}

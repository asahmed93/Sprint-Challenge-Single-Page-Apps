import React from "react";

export default function CharacterCard(props) {
  return(
    <div> 
      <p>{props.image}</p>
      <p>{props.name}</p>
    </div>
  )
}

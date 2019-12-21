import React from "react";
import styled from "styled-components";

function CharacterCard(props) {

  const ImgWrapper = styled.img`
    display: flex;
    justify-content: center;
    margin: 2% 35%;
  `

  const InfoCenter = styled.div`
    text-align: center;
  `

  const Paras = styled.p`
    font-size: 1.3rem;
    color: red;
  `

  return (
    <InfoCenter>
      <ImgWrapper src={props.char.image} alt="Rick n Morty character"/>
      <h2>Name: {props.char.name}</h2>
      <Paras>Status: {props.char.status}</Paras>
      <Paras>Species: {props.char.species}</Paras>
    </InfoCenter>
  );
}
export default CharacterCard
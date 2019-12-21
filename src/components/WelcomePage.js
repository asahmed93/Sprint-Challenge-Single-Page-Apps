import React from "react";
import styled from "styled-components";


export default function WelcomePage() {

  const Title = styled.h1`
    color: blue;
  `

  const ImgWrapper = styled.img`
    display: flex;
    justify-content: center;
    margin: 2% 35%;
  `


  
  return (
    <section className="welcome-page">
      <header>
        <Title>Welcome to the ultimate fan site!</Title>
        <ImgWrapper
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

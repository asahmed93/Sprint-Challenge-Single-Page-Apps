import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;

    a{
      text-decoration: none;
    }
  `

  return (
    <header className="ui centered">
      <Nav>
        <NavLink to ="/">Home</NavLink>
        <NavLink to ="/characters">Characters</NavLink>
        <NavLink to ="/search">Search</NavLink>
      </Nav>
      
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
  );
}

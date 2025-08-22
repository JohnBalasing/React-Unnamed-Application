import React from "react";
import styled from 'styled-components'

const Header = () => {
  return (
    <Headings>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a>Works</a>
      <a>Contact</a>
    </Headings>
  );
};

export default Header;


const Headings = styled.div`
height: 10%;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
align-text: right;
font-family: Courier New;
font-size: 20px;

@media(max-width: 500px){
    width: 100%;
  }

a{
    cursor: pointer;
    margin-left: 5em;
    font-weight: 500;
    text-decoration: none; 
    color: white;
}

a:hover{
  color: black;
  // transform: translateY(-5px);
}
`
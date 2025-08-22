import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";

const ABOUT_TEXT = `Experienced Frontend Developer with a demonstrated history of working in IT Industry. 
Proficient in creating User Interface using frontend technologies like JavaScript, React framework, HTML and CSS. 
Experienced in developing single-page applications, API integrations and Version Controlling using GIT.
Hands-on in creating REST APIs, User Authentication with Jwt using MERN stack technology.
Good at creating E-commerce sites using React and Redux. Self-motivated and tend to improve the skills and 
explore the latest web technologies regularly.
Hands-on with Material Ui, styled components and other css libraries and good in creating interactive portfolio websites.`;

const About = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = -1;
    const timer = setInterval(() => {
      i++;
      if (i === ABOUT_TEXT.length - 1) clearInterval(timer);
      setText((prev) => prev + ABOUT_TEXT[i]);
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MainBlock>
        <Header/>
        <Container>
        <p>{text}</p>
        </Container>
    </MainBlock>
  );
};

export default About;

const MainBlock = styled.div`
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    flex-direction: column;

    @media(max-width: 750px){
        height: 100vh;
        width: fit-content;
        // display: flex;
        // flex-direction: row;
      }
`

const Container = styled.div`
  width: 50%;
  height: 100vh;
  color: black;
  margin: 5em 0 0 25em;
  display: flex;
  justify-content: center;
  
  @media(max-width: 750px){
    display: contents;
  }

  p{
    font-family: Courier;
    font-weight: bold;
    font-size: 25px;
  }
`

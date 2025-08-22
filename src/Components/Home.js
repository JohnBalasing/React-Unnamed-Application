import React ,{useState, useEffect} from 'react'
import styled from 'styled-components'
import pic from '../Images/home_banner1.jpg'
import Header from './Header'

const Home = () => {
  
  return (
    <MainBlock>
        <Header/>
        <h1>This is Home Page</h1>
    </MainBlock>
  )
}

export default Home

const MainBlock = styled.div`
color: white;
background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
height: 100vh;
width: auto;

`

const Headings = styled.div`
height: 10%;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
align-text: right;
font-family: Courier New;
font-size: 20px;


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

const Banner = styled.div`


`
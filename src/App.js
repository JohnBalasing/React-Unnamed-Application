import React,{useEffect} from 'react'
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

//pages
import About from './Components/About';

const App = () => {

useEffect(() => {
    setInterval(() => {

    },3000)
},[])

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react'
import styled from 'styled-components';

const Counter = () => {
    const [count, setCount] = useState(0)

    const addCount = () =>{
        setCount(count+1)
    }

    const minCount = () =>{
        count > 0 ? setCount(count-1) : setCount(0)
    }
  return (
    <>
    <h1>Counter: {count}</h1>
    <Button>
    <button onClick={addCount}>Add</button>
    <button onClick={minCount}>Subtract</button>
    </Button>
    </>
  )
}

export default Counter

const Button = styled.div`
width: 150px;

display: flex;
justify-content: space-between;

button{
    border-radius: 25%;
    border: 1px solid red;
}

`;
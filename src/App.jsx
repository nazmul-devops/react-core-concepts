import { useState } from 'react'
import './App.css'
import Users from './custom/Users'

function App() {

  function Counter () {
    const [count, setCount] = useState(0)
    return(
      <div style={{border: '2px solid blue', borderRadius: '20px'}}>
        <h3>Counter is: {count}</h3>
        <button style={{margin: '10px'}} onClick={()=> {setCount(count +1)}}>Add</button>
        <button style={{margin: '10px'}} onClick={()=> {setCount(count -1)}}>Remove</button>
        <button onClick={()=> {setCount(0)}}>Reset</button>
      </div>
    )
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Counter></Counter>
      <Users></Users>
    </>
  )
}

export default App

import React,{useState} from 'react'

const Props = ({increment1,name}) => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>{increment1?increment1(name):"No function passed"}</h1>
        <button onClick={() => increment1(name)}>Name</button>
    </div>
  )
}

export default Props
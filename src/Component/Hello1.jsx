import React, {useState} from 'react'

function Hello1(props) {
    const [number,setNumber] = useState(0) 
    const [value,setValue] = useState(0)
    let step = 1
  return (
    <div>
       <h1>{number}</h1>
       <input step='1' type='range' value={number} min='0' disabled max='20' onChange={(e)=>setValue((e.target.value))}/>
       <button onClick={()=>setNumber(number+step)}>Avel</button>
       <button onClick={()=>{setNumber(number-step)}}>Pakas</button>
    </div>
  )
}

export default Hello1
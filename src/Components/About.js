import React, { useRef, useState } from 'react'

function About() {
    const useElement=useRef("");
    const[data,setData]=useState("")

    function Handleinput(){
        let tut=useElement.current.value;
        useElement.current.focus()
       
        setData(tut)
        console.log(tut)
        setData("")
    }
  return (
<>
<h2>UseRef Start</h2>
<input type="tetx" ref={useElement} placeholder="Enter Your Fav Movie"/>
<button onClick={Handleinput}>Click Me</button>
<h2>{data}</h2>
</>
  )
}

export default About
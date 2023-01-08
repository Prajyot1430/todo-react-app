import React, { useEffect, useState } from 'react'
import  './Expenceitem.css';

function Expenceitem() {
  const[names,setName]=useState()


  function myfun(){
   
    setName(names)
    console.log(names)

  }

  useEffect(()=>{
    console.log("Hello React")
  },[])

  return (
    <>
    <div>
        <div>March 12th 2021</div>
    </div>
    <div>
      <input type='text' id='boss' onChange={e=>setName(e.target.value)} placeholder='Enet You Car Name'/>
      <button onClick={myfun}>Click Me</button>
         <h2>Car Insurence{names}</h2>
   <div>$200</div>
    </div>
    </>
  )
}

export default Expenceitem
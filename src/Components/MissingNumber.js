import React, { useRef, useState } from 'react'

function MissingNumber() {
    const inputref=useRef(null)
    const[count,setcount]=useState()

    function myfunction(){
        let num=inputref.current.value;
        if(num%2==0){
            num=num*num-1
        }else{
            num=num*num+1
        }
        setcount(num)
    }
  return (

<>

<input type='text' ref={inputref} placeholder="enter Your Any Number"/>
<button onClick={myfunction}>Click Me</button>
<h2>{count}</h2>

</>

  )
}

export default MissingNumber
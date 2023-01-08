import React, { useRef ,useState} from 'react'

function Home() {
    const inputref=useRef()
    const [label1, setLabel1] = useState('');
    const [label2, setLabel2] = useState('');
    const [label3, setLabel3] = useState('');
    const [label4, setLabel4] = useState('');

  function currentvalue(){
let num=inputref.current.value;

setLabel1(num)
setLabel2(num)
setLabel3(num)
setLabel4(num)
  }

  return (

<>
<h2>{label1}</h2>
<h2>{label2}</h2>
<h2>{label3}</h2>
<h2>{label4}</h2>

<input type="text" ref={inputref} onChange={currentvalue}/>

</>

  )
}

export default Home
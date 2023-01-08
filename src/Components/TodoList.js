import React, { useState } from 'react'

function TodoList() {
    const[activity,setActivity]=useState("");
    const[listActivity,setlistData]=useState([])

    function addActivity(){
        //  Its Is Coorct But its a asychronous way
        // setlistData([...listActivity,activity])
        // console.log(listActivity)

        setlistData((listActivity)=>{
            const updatelist=[...listActivity,activity]
            console.log(updatelist)
            setActivity('')
            return updatelist;
        })
    }

    function removeActivity(i){

const updatedList=listActivity.filter((elem,id)=>{

return i!=id;

})
setlistData(updatedList)
}

  return (

<>

<div className='container'>
    <div className='header'>TODO lIST</div>
    <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='List-heading'>Here Your List:-</p>
    {listActivity!=[]&&listActivity.map((data,i)=>{
        return(
<>

<p key={i}>
<div className='listData'>{data}</div>
<div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>

</p>

</>

        )
    })}


</div>

</>

    )
}

export default TodoList
import React, { useContext } from 'react'
import { datas,data1} from '../App'

function Movie() {
    const firstname=useContext(datas)
    const profit=useContext(data1)
  return (
    <div>My Best Movie Is {firstname} and this movie profit is {profit}</div>
  )
}

export default Movie
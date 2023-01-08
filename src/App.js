import { createContext } from 'react';
import './App.css';
// import About from './Components/About';
// import Expenceitem from './Components/Expenceitem';
// import Home from './Components/Home';
// import MissingNumber from './Components/MissingNumber';
// import Movie from './Components/Movie';
 import TodoList from './Components/TodoList';





const datas=createContext()
const data1=createContext()
function App() {
  let Total="RRR";
  let Profit="20cr"
  return (
   
    <>
    
    <h2>ToDo List</h2>
  {/* <datas.Provider value={Total}>
    <data1.Provider value={Profit}>
  <Expenceitem/>
  <MissingNumber/>
  <Home/>
   <About/> 
   <Movie/>
   </data1.Provider>
   </datas.Provider> */}
   <TodoList/>
    </>


  );
}

export default App;
export {datas,data1}
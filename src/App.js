//components 
import Adduser from "../src/components/page/Adduser"
import Navbar from "./components/page/Navbar"
// import Alluser from "./components/Allusers"
import Dilynote from "./components/page/Dailynotes"
import EditUser from "./components/page/EditUser"
import AddText from "./components/page/AddText"
import MyComponent from "./components/page/spiner"
 //routers
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import Resister from "./components/Resister/Resister"



function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     
       <Routes>
      <Route path="/" element= {<Dilynote/>}/>
         <Route path="/all" element= {<MyComponent/>}/>
         <Route path="/add" element= {<Adduser/>}/>
         <Route path="/edit/:id" element= {<EditUser/>}/>
         <Route path="/text" element= {<AddText/>}/> 

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/resister" element={<Resister/>}></Route>




         
        </Routes>
    </BrowserRouter>

   

 


  );
}

export default App;

//Well

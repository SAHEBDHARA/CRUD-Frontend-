//components 
import Adduser from "../src/components/Adduser"
import Navbar from "./components/Navbar"
import Alluser from "./components/Allusers"
import Dilynote from "./components/Dailynotes"
import EditUser from "./components/EditUser"
import AddText from "./components/AddText"
 //routers
import {BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element= {<Dilynote/>}/>
         <Route path="/all" element= {<Alluser/>}/>
         <Route path="/add" element= {<Adduser/>}/>
         <Route path="/edit/:id" element= {<EditUser/>}/>
         <Route path="/text" element= {<AddText/>}/>




         
        </Routes>
    </BrowserRouter>
  );
}

export default App;


import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Vote from "../src/Components/Vote";
import Results from "../src/Components/Results";

function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/login" element={<Login/>}></Route>
         <Route path="/results" element={<Results/>}></Route>
        <Route path="/vote" element={<Vote/>}></Route>
        
      </Routes>
    
    </div>
  
  );
}

export default App;

import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/login" element={<Login/>}>

        </Route>
      </Routes>
    
    </div>
  
  );
}

export default App;

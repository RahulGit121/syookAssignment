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

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Vote from '../src/Components/Vote';
// import Results from '../src/Components/Results';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li><Link to="/">Vote</Link></li>
//             <li><Link to="/results">Results</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Vote />} />
//           <Route path="/results" element={<Results />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

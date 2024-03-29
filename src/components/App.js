import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router,Link, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";




export default function App() {
  return (
    
    <div id="home">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
           <Link to="/">{Home}</Link>
          </li>
          <li>
           <Link to="/">{Shapes}</Link>
          </li>
          <li>
           <Link to="/">{Image}</Link>
          </li> 
        </ul>
      </nav>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}>
    <Route path="/Shapes" element={<Shapes/>}/>
    <Route path="/Image" element={<Image/>}/>
  </Route>
    </Routes>
    </BrowserRouter>
   </div>
      
      
          
        

        
          
            
              
            
         
      
        
      
        
        
      
    </div>
      
  );
}
// export default App;

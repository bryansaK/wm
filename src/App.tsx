import logo from "./logo.svg"
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  return (
  <div>
   <Routes>
     <Route path="/" element={<div></div>} />
     <Route path="/about" element={<></>} />
   </Routes>
  </div>
  );
}

export default App;

import logo from "./logo.svg"
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  return (
   <Routes>
     <Route path="/" element={<div></div>} />
     <Route path="/about" element={<></>} />
   </Routes>
  );
}

export default App;

import logo from "./logo.svg"
import "./App.css";
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from "pages/HomePage";

function App() {
  return (
  <div>
   <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" />
   </Routes>
  </div>
  );
}

export default App;

import 'react'
import { Routes, Route } from "react-router-dom";
import './css/style.css'
import HomePage from './views/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App

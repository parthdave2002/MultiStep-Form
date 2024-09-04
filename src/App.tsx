import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
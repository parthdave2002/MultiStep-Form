import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  
  return (
    <>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
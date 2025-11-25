import './App.css'

import { Route, Routes } from 'react-router-dom'

// import Home from './pages/Home'
import CreateCliente from './pages/Clientes/create'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/create/cliente' element={<CreateCliente />} />
      </Routes>
    </>
  )
}

export default App

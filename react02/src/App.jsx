import './App.css'
import { Navbar } from './componentes/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Inicio } from './componentes/Inicio'
import { ItemDetailContainer } from './componentes/ItemDetailContainer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='contenedor'>
          <Routes>
            <Route path='/' element={<Inicio/> } />
            <Route path='/productos/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App


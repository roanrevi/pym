import './App.css'
import Inicio from './components/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import UsuariosContext from './context/UsuariosContext'
import ListaUsuarios from './components/ListaUsuarios'
import UsuariosList from './components/UsuariosList'



function App() {
  

  return (
    <>
    <UsuariosContext>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/UsuariosList' element={<UsuariosList/>}/>
          <Route exact path='/ListaUsuarios' element={<ListaUsuarios/>}/>
        </Routes>
        
      </BrowserRouter>
    </UsuariosContext>

    </>
  )
}

export default App

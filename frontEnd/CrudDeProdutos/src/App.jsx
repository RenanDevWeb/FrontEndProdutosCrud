import Home from '../pages/home/home'
import Produtos from "../pages/produtos/produtos";
import AddProduto from "../pages/addProduto/addProduto";
import UpdateProduto from "../pages/update/index";
import VerProduto  from '../pages/visualizarProdutos/index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  

  return (
    <>
     <BrowserRouter>
    <Routes>
            <Route path="/" element={<Home />} /> 
            <Route exact path="/produtos" element={<Produtos />} />
            <Route exact path="/add_new" element={<AddProduto />} />
            <Route exact path="/update/:id" element={< UpdateProduto/>} />
            <Route exact path="/visualizar/:id" element={< VerProduto/>} />
            
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// css padrão
import './App.css';

// paginas
import Login from './pages/Login';
import Home from './pages/Home';
import CadastroProdut from './pages/CadastroProdut';
import EditarProdut from './pages/EditarProdut';

// componentes


// gerenciador de rotas
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/home" element={<Home/>}/>
  <Route path="/produto/cadastrar" element = {<CadastroProdut/>}/>
  <Route path="/produto/editar/:id" element ={<EditarProdut/>} />
</Routes>
</BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// css padrão
import './App.css';

// paginas
import Login from './pages/Login';
import Home from './pages/Home';

// componentes
import Navega from './components/Navega';

// gerenciador de rotas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navega/>
<Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/home" element={<Home/>}/>
</Routes>
</BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;

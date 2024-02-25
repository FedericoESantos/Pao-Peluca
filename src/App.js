import { Header } from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cortes from './Components/PAGINAS/Cortes/Cortes.jsx';
import Coloracion from "./Components/PAGINAS/Coloracion/Coloracion.jsx"
import Peinados from "./Components/PAGINAS/Peinados/Peinados.jsx"
import Alisados from "./Components/PAGINAS/Alisados/Alisados.jsx"
import Productos from "./Components/PAGINAS/Productos/Productos.jsx"
import Cursos from './Components/PAGINAS/Cursos/Cursos.jsx';
import Contacto from './Components/PAGINAS/Contacto/Contacto.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cortes" element={<Cortes />} />
          <Route path="/coloracion" element={<Coloracion />} />
          <Route path="/peinados" element={<Peinados />} />
          <Route path="/alisados" element={<Alisados />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>


        <Footer />
      </Router>
    </div>
  );
}

export default App;

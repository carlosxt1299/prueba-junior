import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">Gestión de Productos</h1>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/nuevo" element={<ProductForm />} />
            <Route path="/editar/:id" element={<ProductForm />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

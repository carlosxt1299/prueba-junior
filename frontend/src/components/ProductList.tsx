import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productosApi } from '../services/api';
import type { Producto } from '../types';

export default function ProductList() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadProductos();
  }, []);

  const loadProductos = async () => {
    try {
      setLoading(true);
      const response = await productosApi.getAll();
      setProductos(response.data);
    } catch (err) {
      setError('Error al cargar productos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return;
    
    try {
      await productosApi.delete(id);
      loadProductos();
    } catch (err) {
      alert('Error al eliminar producto');
      console.error(err);
    }
  };

  if (loading) return <div className="loading">Cargando productos...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <div className="header">
        <h1>Lista de Productos</h1>
        <button onClick={() => navigate('/nuevo')} className="btn-primary">
          + Nuevo Producto
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.marca?.nombre || '-'}</td>
                <td>{producto.categoria?.nombre || '-'}</td>
                <td>Q{Number(producto.precio).toFixed(2)}</td>
                <td>{producto.stock}</td>
                <td className="actions">
                  <button 
                    onClick={() => navigate(`/producto/${producto.id}`)}
                    className="btn-info"
                  >
                    Ver
                  </button>
                  <button 
                    onClick={() => navigate(`/editar/${producto.id}`)}
                    className="btn-warning"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(producto.id)}
                    className="btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

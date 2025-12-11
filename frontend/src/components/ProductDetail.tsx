import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productosApi } from '../services/api';
import type { Producto } from '../types';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [producto, setProducto] = useState<Producto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      loadProducto(parseInt(id));
    }
  }, [id]);

  const loadProducto = async (productId: number) => {
    try {
      setLoading(true);
      const response = await productosApi.getOne(productId);
      setProducto(response.data);
    } catch (err) {
      setError('Error al cargar el producto');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!producto) return <div className="error">Producto no encontrado</div>;

  return (
    <div className="container">
      <div className="header">
        <h1>Detalle del Producto</h1>
        <button onClick={() => navigate('/')} className="btn-secondary">
          Volver
        </button>
      </div>

      <div className="product-detail">
        <div className="detail-card">
          <h2>{producto.nombre}</h2>
          
          <div className="detail-row">
            <span className="label">ID:</span>
            <span>{producto.id}</span>
          </div>

          <div className="detail-row">
            <span className="label">Descripción:</span>
            <span>{producto.descripcion || 'Sin descripción'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Marca:</span>
            <span>{producto.marca?.nombre || '-'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Categoría:</span>
            <span>{producto.categoria?.nombre || '-'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Precio:</span>
            <span className="price">Q{Number(producto.precio).toFixed(2)}</span>
          </div>

          <div className="detail-row">
            <span className="label">Stock:</span>
            <span className={producto.stock > 0 ? 'stock-available' : 'stock-unavailable'}>
              {producto.stock} unidades
            </span>
          </div>

          <div className="detail-actions">
            <button 
              onClick={() => navigate(`/editar/${producto.id}`)}
              className="btn-primary"
            >
              Editar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

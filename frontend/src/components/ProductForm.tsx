import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productosApi, marcasApi, categoriasApi } from '../services/api';
import type { Marca, Categoria } from '../types';

export default function ProductForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    marcaId: '',
    categoriaId: '',
  });

  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    loadMarcasYCategorias();
    if (isEdit && id) {
      loadProducto(parseInt(id));
    }
  }, [id, isEdit]);

  const loadMarcasYCategorias = async () => {
    try {
      const [marcasRes, categoriasRes] = await Promise.all([
        marcasApi.getAll(),
        categoriasApi.getAll(),
      ]);
      setMarcas(marcasRes.data);
      setCategorias(categoriasRes.data);
    } catch (err) {
      console.error('Error al cargar marcas y categorías', err);
    }
  };

  const loadProducto = async (productId: number) => {
    try {
      const response = await productosApi.getOne(productId);
      const producto = response.data;
      setFormData({
        nombre: producto.nombre,
        descripcion: producto.descripcion || '',
        precio: producto.precio.toString(),
        stock: producto.stock.toString(),
        marcaId: producto.marcaId.toString(),
        categoriaId: producto.categoriaId.toString(),
      });
    } catch (err) {
      console.error('Error al cargar producto', err);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    if (!formData.precio || parseFloat(formData.precio) <= 0) {
      newErrors.precio = 'El precio debe ser mayor a 0';
    }

    if (!formData.marcaId) {
      newErrors.marcaId = 'Debe seleccionar una marca';
    }

    if (!formData.categoriaId) {
      newErrors.categoriaId = 'Debe seleccionar una categoría';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    try {
      const data = {
        nombre: formData.nombre,
        descripcion: formData.descripcion || undefined,
        precio: parseFloat(formData.precio),
        stock: formData.stock ? parseInt(formData.stock) : 0,
        marcaId: parseInt(formData.marcaId),
        categoriaId: parseInt(formData.categoriaId),
      };

      if (isEdit && id) {
        await productosApi.update(parseInt(id), data);
        alert('Producto actualizado correctamente');
      } else {
        await productosApi.create(data);
        alert('Producto creado correctamente');
      }

      navigate('/');
    } catch (err) {
      alert('Error al guardar el producto');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>{isEdit ? 'Editar Producto' : 'Nuevo Producto'}</h1>
        <button onClick={() => navigate('/')} className="btn-secondary">
          Cancelar
        </button>
      </div>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'error' : ''}
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="precio">Precio *</label>
            <input
              type="number"
              id="precio"
              name="precio"
              step="0.01"
              value={formData.precio}
              onChange={handleChange}
              className={errors.precio ? 'error' : ''}
            />
            {errors.precio && <span className="error-message">{errors.precio}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="marcaId">Marca *</label>
            <select
              id="marcaId"
              name="marcaId"
              value={formData.marcaId}
              onChange={handleChange}
              className={errors.marcaId ? 'error' : ''}
            >
              <option value="">Seleccione una marca</option>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.id}>
                  {marca.nombre}
                </option>
              ))}
            </select>
            {errors.marcaId && <span className="error-message">{errors.marcaId}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="categoriaId">Categoría *</label>
            <select
              id="categoriaId"
              name="categoriaId"
              value={formData.categoriaId}
              onChange={handleChange}
              className={errors.categoriaId ? 'error' : ''}
            >
              <option value="">Seleccione una categoría</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
            {errors.categoriaId && <span className="error-message">{errors.categoriaId}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Guardando...' : isEdit ? 'Actualizar' : 'Crear'}
          </button>
        </div>
      </form>
    </div>
  );
}

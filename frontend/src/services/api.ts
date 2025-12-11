import axios from 'axios';
import type { Producto, CreateProductoDto, UpdateProductoDto, Marca, Categoria } from '../types';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productosApi = {
  getAll: () => api.get<Producto[]>('/productos'),
  getOne: (id: number) => api.get<Producto>(`/productos/${id}`),
  create: (data: CreateProductoDto) => api.post<Producto>('/productos', data),
  update: (id: number, data: UpdateProductoDto) => api.put<Producto>(`/productos/${id}`, data),
  delete: (id: number) => api.delete(`/productos/${id}`),
};

export const marcasApi = {
  getAll: () => api.get<Marca[]>('/marcas'),
};

export const categoriasApi = {
  getAll: () => api.get<Categoria[]>('/categorias'),
};

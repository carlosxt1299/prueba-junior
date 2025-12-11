-- Crear tablas
CREATE TABLE IF NOT EXISTS marca (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categoria (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS producto (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(200) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  stock INTEGER DEFAULT 0,
  marca_id INTEGER NOT NULL,
  categoria_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (marca_id) REFERENCES marca(id) ON DELETE CASCADE,
  FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE CASCADE
);

-- Limpiar datos anteriores
TRUNCATE TABLE producto, marca, categoria RESTART IDENTITY CASCADE;

-- Insertar marcas
INSERT INTO marca (nombre) VALUES 
  ('Samsung'),
  ('Apple'),
  ('Sony'),
  ('LG'),
  ('Nike'),
  ('Adidas'),
  ('Dell'),
  ('HP'),
  ('Xiaomi'),
  ('Huawei');

-- Insertar categorías
INSERT INTO categoria (nombre) VALUES 
  ('Electrónica'),
  ('Ropa'),
  ('Hogar'),
  ('Deportes'),
  ('Tecnología'),
  ('Computadoras'),
  ('Accesorios'),
  ('Audio'),
  ('Televisores'),
  ('Calzado');

-- Insertar productos
INSERT INTO producto (nombre, descripcion, precio, stock, marca_id, categoria_id) VALUES 
  ('Samsung Galaxy S23', 'Smartphone de última generación con pantalla AMOLED de 6.1 pulgadas', 899.99, 50, 1, 5),
  ('iPhone 15 Pro', 'iPhone con chip A17 Pro y cámara de 48MP', 1199.99, 30, 2, 5),
  ('Sony WH-1000XM5', 'Audífonos con cancelación de ruido activa', 399.99, 100, 3, 8),
  ('LG OLED TV 55"', 'Televisor OLED 4K con webOS inteligente', 1499.99, 20, 4, 9),
  ('Nike Air Max 270', 'Zapatillas deportivas con amortiguación Air', 129.99, 200, 5, 10),
  ('Dell XPS 15', 'Laptop profesional con Intel Core i7 y 16GB RAM', 1799.99, 15, 7, 6),
  ('Adidas Ultraboost', 'Zapatillas running con tecnología Boost', 189.99, 80, 6, 10),
  ('Apple Watch Series 9', 'Smartwatch con GPS y monitor de salud', 449.99, 60, 2, 7),
  ('Samsung Smart TV 43"', 'Televisor LED 4K con control por voz', 599.99, 35, 1, 9),
  ('Xiaomi Redmi Note 12', 'Smartphone con cámara de 108MP y batería de larga duración', 299.99, 150, 9, 5),
  ('Sony PlayStation 5', 'Consola de videojuegos de última generación', 549.99, 25, 3, 1),
  ('HP Pavilion 14', 'Laptop ligera ideal para estudiantes', 699.99, 40, 8, 6),
  ('Nike Dri-FIT', 'Camiseta deportiva con tecnología de secado rápido', 34.99, 300, 5, 2),
  ('Adidas Originals Sudadera', 'Sudadera casual con capucha', 59.99, 120, 6, 2),
  ('LG SoundBar 5.1', 'Barra de sonido con subwoofer inalámbrico', 349.99, 45, 4, 8),
  ('Dell Monitor 27"', 'Monitor 4K UHD con tecnología IPS', 399.99, 55, 7, 6),
  ('Apple AirPods Pro 2', 'Audífonos inalámbricos con cancelación de ruido', 249.99, 180, 2, 7),
  ('Xiaomi Mi Band 8', 'Pulsera inteligente con monitor de actividad', 49.99, 250, 9, 7),
  ('Samsung Galaxy Tab S9', 'Tablet Android de 11 pulgadas con S Pen', 649.99, 70, 1, 5),
  ('Huawei MateBook D15', 'Laptop delgada con pantalla FullView', 749.99, 30, 10, 6);

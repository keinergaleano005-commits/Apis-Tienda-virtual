const express = require('express');
const app = express();

// Middleware para que Express pueda entender JSON
app.use(express.json());

// Importamos las rutas desde la carpeta tienda-api
const authRoutes = require('./tienda-api/auth');
const productRoutes = require('./tienda-api/products');
const cartRoutes = require('./tienda-api/cart');

// Definimos las rutas base para cada módulo
app.use('/api/auth', authRoutes);      // Rutas de autenticación
app.use('/api/products', productRoutes); // Rutas de productos
app.use('/api/cart', cartRoutes);      // Rutas del carrito

// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log(' Servidor corriendo en http://localhost:3000');
  console.log(' Endpoints disponibles:');
  console.log('   - POST   http://localhost:3000/api/auth/register');
  console.log('   - POST   http://localhost:3000/api/auth/login');
  console.log('   - GET    http://localhost:3000/api/products');
  console.log('   - POST   http://localhost:3000/api/products');
  console.log('   - GET    http://localhost:3000/api/cart');
  console.log('   - POST   http://localhost:3000/api/cart');
  console.log('   - DELETE http://localhost:3000/api/cart/:id');
});
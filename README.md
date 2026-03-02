# API Tienda Virtual 

## Descripción del Proyecto
API REST desarrollada para una tienda virtual que permite la gestión de usuarios, productos y carrito de compras. Este proyecto fue creado como evidencia de aprendizaje para el componente formativo "Construcción de API" (GA7-220501096-AA5-EV03).

## Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución JavaScript
- **Express** - Framework para construcción de APIs
- **JWT (JSON Web Tokens)** - Autenticación de usuarios
- **Bcrypt.js** - Cifrado de contraseñas
- **Postman** - Prueba de endpoints

## URL del repositorio: https://github.com/keinergaleano005-commits/Apis-Tienda-virtual.git

## Estructura del Proyecto
proyecto/
│
├── index.js # Archivo principal del servidor
├── package.json # Dependencias del proyecto
├── README.md # Documentación
│
└── tienda-api/ # Módulos de la API
├── auth.js # Rutas de autenticación
├── products.js # Rutas de productos (CRUD)
└── cart.js # Rutas del carrito

## Instalación y Ejecución

### Requisitos Previos
- Node.js instalado
- NPM instalado
- Postman (para pruebas)

### Pasos para Ejecutar
1. **Instalar dependencias**

npm install express bcryptjs jsonwebtoken

node index.js
El servidor estará disponible en: http://localhost:3000

Endpoints de la API
Autenticación
Registro de Usuario
URL: POST /api/auth/register

Descripción: Crea una nueva cuenta de usuario

Body:
{
  "name": "Juan Pérez",
  "email": "juan@email.com",
  "password": "123456"
}
Respuesta exitosa: 201 Created + Token JWT

Inicio de Sesión
URL: POST /api/auth/login

Descripción: Autentica un usuario existente

Body:
{
  "email": "juan@email.com",
  "password": "123456"
}
Respuesta exitosa: 200 OK + Token JWT

Productos (CRUD Completo)
Listar Todos los Productos
URL: GET /api/products

Descripción: Obtiene todos los productos disponibles

Respuesta: Array de productos

Obtener Producto por ID
URL: GET /api/products/:id

Ejemplo: GET /api/products/1

Respuesta: Información del producto

Crear Nuevo Producto
URL: POST /api/products

Descripción: Agrega un nuevo producto al catálogo

Body:
{
  "name": "Gorra",
  "price": 15,
  "description": "Gorra de béisbol negra",
  "image": "http://ejemplo.com/gorra.jpg"
}
Respuesta: Producto creado con ID asignado

Actualizar Producto
URL: PUT /api/products/:id

Descripción: Modifica un producto existente

Body: Campos a actualizar (todos opcionales)

Eliminar Producto
URL: DELETE /api/products/:id

Descripción: Elimina un producto del catálogo

Carrito de Compras
Agregar al Carrito
URL: POST /api/cart

Descripción: Añade un producto al carrito

Body:
{
  "productId": 1,
  "quantity": 2
}
Validación: Verifica que el producto exista

Ver Carrito
URL: GET /api/cart

Descripción: Muestra todos los items en el carrito

Eliminar del Carrito
URL: DELETE /api/cart/:id

Descripción: Elimina un item específico del carrito

Pruebas Realizadas
Pruebas Exitosas
✓ Registro de usuarios con datos válidos
✓ Login con credenciales correctas
✓ Creación de productos nuevos
✓ Listado de todos los productos
✓ Búsqueda de productos por ID
✓ Actualización de productos
✓ Eliminación de productos
✓ Agregar productos al carrito
✓ Visualizar carrito actualizado
✓ Eliminar items del carrito

Manejo de Errores
✓ Registro con email duplicado
✓ Login con contraseña incorrecta
✓ Búsqueda de producto inexistente
✓ Agregar producto sin productId
✓ Agregar producto que no existe

Control de Versiones
El proyecto utiliza Git para control de versiones y está alojado en GitHub.

Conclusiones
Se desarrolló una API REST completa con operaciones CRUD
Se implementó autenticación segura utilizando JWT y bcrypt
La arquitectura modular facilita el mantenimiento y escalabilidad
Se cumplen todos los requerimientos establecidos en la evidencia GA7-220501096-AA5-EV03
Las pruebas realizadas confirman el correcto funcionamiento de todos los endpoints
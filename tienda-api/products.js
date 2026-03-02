const express = require('express');
const router = express.Router();


let products = [
  { id: 1, name: "Camiseta", price: 20, description: "Camiseta de algodón", image: "http://example.com/camiseta.jpg" },
  { id: 2, name: "Pantalón", price: 30, description: "Pantalón de mezclilla", image: "http://example.com/pantalon.jpg" },
  { id: 3, name: "Zapatos", price: 50, description: "Zapatos deportivos", image: "http://example.com/zapatos.jpg" }
];


router.post('/', (req, res) => {
  const { name, price, description, image } = req.body;

  if (!name || !price || !description || !image) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  const newProduct = { 
    id: products.length + 1, 
    name, 
    price, 
    description, 
    image 
  };
  products.push(newProduct);

  res.status(201).json({
    message: 'Producto creado con éxito',
    product: newProduct,
  });
});


router.get('/', (req, res) => {
  res.status(200).json(products);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id == id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado.' });
  }

  res.status(200).json(product);
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;

  const product = products.find(p => p.id == id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado.' });
  }

  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;
  product.image = image || product.image;

  res.status(200).json({
    message: 'Producto actualizado con éxito',
    product,
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex(p => p.id == id);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Producto no encontrado.' });
  }

  products.splice(productIndex, 1);

  res.status(200).json({ message: 'Producto eliminado con éxito' });
});


module.exports = router;
module.exports.products = products; 
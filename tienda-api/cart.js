const express = require('express');
const router = express.Router();


const productModule = require('./products');
const products = productModule.products; 


let cart = [];


router.post('/', (req, res) => {
  
  const { productId, quantity } = req.body;

  
  if (!productId || !quantity) {
    return res.status(400).json({ 
      message: 'productId y quantity son requeridos.' 
    });
  }

  
  const product = products.find(p => p.id === parseInt(productId));
  
  
  if (!product) {
    return res.status(404).json({ 
      message: 'Producto no encontrado.' 
    });
  }

  
  const cartItem = { 
    id: cart.length + 1, 
    productId: parseInt(productId), 
    quantity: parseInt(quantity),
    productName: product.name, 
    productPrice: product.price 
  };
  
  
  cart.push(cartItem);

  
  res.status(200).json({
    message: 'Producto agregado al carrito',
    cart: cart, 
  });
});


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Carrito obtenido con éxito',
    cart: cart
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;

  
  cart = cart.filter(item => item.id != id);

  res.status(200).json({ 
    message: 'Producto eliminado del carrito',
    cart: cart 
  });
});

module.exports = router;
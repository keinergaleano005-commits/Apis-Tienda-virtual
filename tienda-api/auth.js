const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = []; 
const JWT_SECRET = 'mi-secreto-super-seguro'; 


router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Todos los campos son requeridos.' });
  }

  
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'El correo ya está registrado.' });
  }

  
  const hashedPassword = await bcrypt.hash(password, 10);

  
  const newUser = { name, email, password: hashedPassword };
  users.push(newUser);

  
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  res.status(201).json({
    message: 'Usuario registrado con éxito',
    token, 
  });
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contraseña son requeridos.' });
  }

  
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Credenciales inválidas.' });
  }

  
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Credenciales inválidas.' });
  }

  
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    message: 'Inicio de sesión exitoso',
    token, 
  });
});

module.exports = router;
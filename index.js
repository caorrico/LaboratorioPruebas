// Servidor Express para el laboratorio de CI/CD
// Autor: Estudiante ESPE
// Fecha: 2026

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint principal que responde con un mensaje de bienvenida
app.get('/', (req, res) => {
    res.json({
        mensaje: 'Bienvenido a la API del Laboratorio 6 - CI/CD con GitHub Actions',
        estado: 'activo'
    });
});

// Endpoint de health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Levantar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});

export default app;

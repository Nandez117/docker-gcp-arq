const express = require('express');
const pokeneaRoutes = require('./src/routes/pokeneaRoutes');

const app = express();
const port = process.env.PORT || 80;

app.use(express.json());

// Montar las rutas modularizadas
app.use('/', pokeneaRoutes);

app.listen(port, () => {
  console.log(`Servidor Pokeneas corriendo en el puerto ${port}`);
});

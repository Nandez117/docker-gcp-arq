const os = require('os');
const pokeneas = require('../data/pokeneas');
const renderPokeneaHTML = require('../views/renderPokenea');

function getRandomPokenea() {
  const index = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[index];
}

// Ruta 1: JSON con id, nombre, altura, habilidad y el id del contenedor
exports.getPokeneaJSON = (req, res) => {
  const pokenea = getRandomPokenea();
  res.json({
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    containerId: os.hostname()
  });
};

// Ruta 2: Pantalla HTML con la imagen, la frase filosófica y el id del contenedor
exports.getPokeneaView = (req, res) => {
  const pokenea = getRandomPokenea();
  const html = renderPokeneaHTML(pokenea, os.hostname());
  res.send(html);
};


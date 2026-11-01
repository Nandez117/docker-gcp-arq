const BUCKET_URL = process.env.BUCKET_URL || "https://storage.googleapis.com/pokeneas-bucket-misja117";

const pokeneas = [
  {
    id: 1,
    nombre: "Pikachurro",
    altura: "0.4 m",
    habilidad: "Descarga de buñuelo caliente",
    imagen: `${BUCKET_URL}/pikachurro.png`,
    fraseFilosofica: "El que tenga tienda que la atienda, y si no, que la venda, mijo."
  },
  {
    id: 2,
    nombre: "Chorizard",
    altura: "1.7 m",
    habilidad: "Llama de fogón de leña",
    imagen: `${BUCKET_URL}/chorizard.png`,
    fraseFilosofica: "Pa'lante es pa'llá, y pa'trás ni pa' coger impulso."
  },
  {
    id: 3,
    nombre: "Bulbasureño",
    altura: "0.7 m",
    habilidad: "Látigo de aguacate maduro",
    imagen: `${BUCKET_URL}/bulbasureno.png`,
    fraseFilosofica: "A papaya puesta, papaya partida."
  },
  {
    id: 4,
    nombre: "Snorpaisa",
    altura: "2.1 m",
    habilidad: "Pereza post-bandeja paisa",
    imagen: `${BUCKET_URL}/snorpaisa.png`,
    fraseFilosofica: "El que madruga encuentra todo cerrado, relax."
  },
  {
    id: 5,
    nombre: "Blastoise-Guatapé",
    altura: "1.6 m",
    habilidad: "Chorro del embalse a presión",
    imagen: `${BUCKET_URL}/blastoise.png`,
    fraseFilosofica: "No me abra los ojos que no le voy a echar gotas."
  },
  {
    id: 6,
    nombre: "Gengar-Comuna",
    altura: "1.5 m",
    habilidad: "Aparecer de la nada en el viaducto",
    imagen: `${BUCKET_URL}/gengar.png`,
    fraseFilosofica: "Sabe más el diablo por viejo que por diablo."
  },
  {
    id: 7,
    nombre: "Vaporeon-Medallo",
    altura: "1.0 m",
    habilidad: "Vapor de jugo de maracuyá",
    imagen: `${BUCKET_URL}/vaporeon.png`,
    fraseFilosofica: "Dios aprieta pero no ahorca, mor."
  },
  {
    id: 8,
    nombre: "Metapodrido",
    altura: "0.7 m",
    habilidad: "Fortaleza mental para regatear",
    imagen: `${BUCKET_URL}/metapod.png`,
    fraseFilosofica: "Al que le van a dar, le guardan; y si está frío, se lo calientan."
  }
];

module.exports = pokeneas;


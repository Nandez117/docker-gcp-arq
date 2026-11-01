const BUCKET_URL = process.env.BUCKET_URL || "https://storage.googleapis.com/pokeneas-arq";

const pokeneas = [
  {
    id: 1,
    pokemonId: 25,
    nombre: "Pikachurro",
    altura: "0.4 m",
    habilidad: "Descarga de buñuelo caliente",
    imagen: `${BUCKET_URL}/pikachurro.png`,
    fraseFilosofica: "El que tenga tienda que la atienda, y si no, que la venda, mijo.",
    tipo: "Eléctrico"
  },
  {
    id: 2,
    pokemonId: 6,
    nombre: "Chorizard",
    altura: "1.7 m",
    habilidad: "Llama de fogón de leña",
    imagen: `${BUCKET_URL}/chorizard.png`,
    fraseFilosofica: "Pa'lante es pa'llá, y pa'trás ni pa' coger impulso.",
    tipo: "Fuego"
  },
  {
    id: 3,
    pokemonId: 1,
    nombre: "Bulbasureño",
    altura: "0.7 m",
    habilidad: "Látigo de aguacate maduro",
    imagen: `${BUCKET_URL}/bulbasureno.png`,
    fraseFilosofica: "A papaya puesta, papaya partida.",
    tipo: "Planta"
  },
  {
    id: 4,
    pokemonId: 143,
    nombre: "Snorpaisa",
    altura: "2.1 m",
    habilidad: "Pereza post-bandeja paisa",
    imagen: `${BUCKET_URL}/snorpaisa.png`,
    fraseFilosofica: "El que madruga encuentra todo cerrado, relax.",
    tipo: "Normal"
  },
  {
    id: 5,
    pokemonId: 9,
    nombre: "Blastoise-Guatapé",
    altura: "1.6 m",
    habilidad: "Chorro del embalse a presión",
    imagen: `${BUCKET_URL}/blastoise.png`,
    fraseFilosofica: "No me abra los ojos que no le voy a echar gotas.",
    tipo: "Agua"
  },
  {
    id: 6,
    pokemonId: 94,
    nombre: "Gengar-Comuna",
    altura: "1.5 m",
    habilidad: "Aparecer de la nada en el viaducto",
    imagen: `${BUCKET_URL}/gengar.png`,
    fraseFilosofica: "Sabe más el diablo por viejo que por diablo.",
    tipo: "Fantasma"
  },
  {
    id: 7,
    pokemonId: 134,
    nombre: "Vaporeon-Medallo",
    altura: "1.0 m",
    habilidad: "Vapor de jugo de maracuyá",
    imagen: `${BUCKET_URL}/vaporeon.png`,
    fraseFilosofica: "Dios aprieta pero no ahorca, mor.",
    tipo: "Agua"
  },
  {
    id: 8,
    pokemonId: 11,
    nombre: "Metapodrido",
    altura: "0.7 m",
    habilidad: "Fortaleza mental para regatear",
    imagen: `${BUCKET_URL}/metapod.png`,
    fraseFilosofica: "Al que le van a dar, le guardan; y si está frío, se lo calientan.",
    tipo: "Bicho"
  }
];

module.exports = pokeneas;

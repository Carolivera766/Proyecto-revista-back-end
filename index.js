// PRIMERA LINEA — cargar variables de entorno
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://127.0.0.1:5500";
// ── MIDDLEWARES ──────────────────────────────────────────
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
// ── DATOS ────────────────────────────────────────────────
// Reemplazar con los artículos reales del grupo
const articulos = [
  {
    id: 1,
    titulo: "Palaza Independencia",
    subtitulo: "",
    categoria: "Historia",
    imagen: "/proyecto-revista-Front-end-/img/plaza-antes.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/plaza-ahora.avif",
    resumen: "Uno de los edificios más emblemáticos del país.",
    introduccion: "Este lugar forma parte de la identidad urbana de Uruguay...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
    title: "",
    introduction: "",
    history: "",
    characteristic: "",
    importance: "",
    end: "",
  },
  {
    id: 2,
    titulo: "Estación Peñarol",
    subtitulo: "",
    categoria: "Industrial",
    imagen: "/proyecto-revista-Front-end-/img/estacion.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/estacion-actual.webp",
    resumen:
      "un parque emblemático de Montevideo Este lugar es un refugio de tranquilidad en medio de la ciudad...",
    introduccion:
      "Este lugar es un refugio de tranquilidad en medio de la ciudad...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
    title: "",
    introduction: "",
    history: "",
    characteristic: "",
    importance: "",
    end: "",
  },
  {
    id: 3,
    titulo: "Skatepark Buceo",
    subtitulo: "",
    categoria: "Cultural",
    imagen: "/proyecto-revista-Front-end-/img/skate-antes.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/skate-actual.jpeg",
    resumen: "Uno de los edificios más emblemáticos del país.",
    introduccion: "Este lugar forma parte de la identidad urbana de Uruguay...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
    title: "",
    introduction: "",
    history: "",
    characteristic: "",
    importance: "",
    end: "",
  },
  {
    id: 4,
    titulo: "Parque Rodó",
    subtitulo: "Un lugar para disfutar ",
    autor: " Por Alexandra",
    categoria: "Naturaleza",
    imagen: "/proyecto-revista-Front-end-/img/parque-rodo.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/parque-ahora.webp",
    resumen:
      "un parque emblemático de Montevideo , Este lugar es un refugio de tranquilidad en medio de la ciudad...",
    introduccion:
      " El parque José Enrique Rodó , conocido popularmente como Parque Rodó, es uno de los paseos más tradicionales y queridos de Montevideo.  Con un tamaño de 42 hectáreas este maravilloso espacio verde forma parte del patrimonio recreativo y cultural de la ciudad.",
    historia:
      "Su creación se originó a finales del siglo XIX cuando terrenos del Banco Nacional pasaron a la administración pública y comenzaron a trazar lo que entonces se llamó el Parque Urbano. Los trazos fueron obra de los arquitectos franceses Carlos Thays y Carlos Racine en 1900 y 1902. El parque fue inaugurado oficialmente el 25 de agosto de 1903 y , catorce años más tarde, en 1917 adoptó su nombre actual en homenaje a la muerte del escritor José Enrique Rodó, autor del célebre ensayo Ariel y una de las figuras intelectuales más destacadas de América Latina , fallecido ese mismo año.",
    caracteristicas:
      "Con el tiempo el parque fue acumulando una notable cantidad de estatuas y monumentos, convirtiéndo se en uno de los lugares públicos con la mayor concentración de obras escultóricas. El monumento central es, naturalmente el dedicado al propio Rodó. Encargado al escultor nacional Jose Belloni y fue inaugurado el 27 de febrero de 1947. Entre sus obras más destacadas se encuentra el Lago artificial, construido sobre antiguas canteras de piedra, que sigue siendo su pieza central. El Castillo, levantado en 1903, alberga desde 1935 la primera biblioteca infantil de América Latina, mientras que el Pabellón de la Música con los nombres de Beethoven, Mozart y Wagner grabados en su fachada evoca la aspiración cultural de aquella época. Completa el conjunto escultórico La Source, una figura femenina en hierro fundido y bronce del artista francés Louis Sauvageau, fabricada en 1862 y traída como parte del afán de embellecer el parque al estilo europeo.La Vegetación del parque no es casualidad, es resultado de una decisión estética y filosófica . Thays y Racine combinaron especies ornamentales traídas de Europa, como sauces llorones, plátanos, tipas y eucaliptos , con flora nativa Uruguaya.Su lago artificial, corazón del paisaje, cuenta con cuatro islas donde crecen plantas como carqueja, mburucuyá, chilcas y verbenas, y sirve de refugio permanente para diversas aves acuáticas. En 2024, un proyecto impulsado por el Presupuesto Participativo transformó esas islas en una pequeña reserva natural urbana, incorporando nuevas especies orientadas a atraer picaflores y mariposas. Así, entre los juegos mecánicos y los monumentos, el parque alberga también un ecosistema vivo que pocas veces recibe la atención que merece. ",

    importancia:
      "Lo que distingue al Parque Rodó de cualquier otro espacio verde de Montevideo es que este parque brinda naturaleza, cultura y recreación en un solo lugar.  En el mismo predio donde se puede caminar entre monumentos centenarios y sentarse frente al lago, a pocos metros funciona el único parque de diversiones mecánicas de Montevideo con más de un siglo de historia, cuya primera atracción fue la montaña rusa de 1889 antes de que incluso el parque tuviera su nombre actual. En este 2026 el parque tuvo una gran renovación, incorporando una Torre de caída libre con 27 metros de altura, una nueva montaña rusa ( la cual no volvía desde 2013) y juegos como UFO 3D, spin y saltamontes. Sin dejar atrás a los irremplazables juegos clásicos como el mambo, los autitos chocadores y el 360. Estas atracciones convocan a familias enteras a disfrutar de lo que fue y lo que es. ",
    conclusion:
      "El parque es un lugar que acompaña a toda la familia , desde los adultos quienes disfrutan de pasear y  relajarse en el pasto, hasta los jóvenes que se reúnen a disfrutar no solo del parque sino de las atracciones. En una época moderna como la que vivimos , donde la tecnología es la fuente principal del entretenimiento, lugares como estos nos ayudan a desconectar, a relajarnos y a interactuar  con otros. ",
    title: "",
    introduction: "",
    history: "",
    characteristic: "",
    importance: "",
    end: "",
  },
  {
    id: 5,
    titulo: "Palacio Legislativo",
    subtitulo: "lugar para pasear ",
    autor: "",
    categoria: "Historia",
    imagen: "/proyecto-revista-Front-end-/img/palacio.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/palacio-actual.jpg",
    resumen: "Uno de los edificios más emblemáticos del país.",
    introduccion: "Este lugar forma parte de la identidad urbana de Uruguay...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
    title: "",
    introduction: "",
    history: "",
    characteristic: "",
    importance: "",
    end: "",
  },
];
// ── RUTAS ────────────────────────────────────────────────
// GET /articulos → devuelve todos los artículos
app.get("/articulos", (req, res) => {
  res.json(articulos);
});
// GET /articulos/:id → devuelve un artículo por id
app.get("/articulo/:id", (req, res) => {
  const id = Number(req.params.id);
  const articulo = articulos.find((a) => a.id === id);
  if (!articulo) {
    return res.status(404).json({ error: "Artículo no encontrado" });
  }
  res.json(articulo);
});
// POST /articulos → crea un artículo nuevo
app.post("/articulos", (req, res) => {
  const { titulo, autor, categoria, descripcion } = req.body;

  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({
      error: "Los campos título, autor y descripción son obligatorios",
    });
  }
  const nuevo = {
    id: articulos.length + 1,
    titulo,
    autor,
    categoria: categoria || "Sin categoría",
    descripcion,
  };
  articulos.push(nuevo);
  res.status(201).json(nuevo);
});
// ── 404 ──────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});
// ── ERROR HANDLER ─────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});
// ── INICIAR SERVIDOR ──────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

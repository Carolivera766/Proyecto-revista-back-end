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
    categoria: "Historia",
    imagen: "/proyecto-revista-Front-end-/img/plaza-antes.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/plaza-ahora.avif",
    resumen: "Uno de los edificios más emblemáticos del país.",
    introduccion: "Este lugar forma parte de la identidad urbana de Uruguay...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
  },
  {
    id: 2,
    titulo: "Estación Peñarol",
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
  },
  {
    id: 3,
    titulo: "Skatepark Buceo",
    categoria: "Cultural",
    imagen: "/proyecto-revista-Front-end-/img/skate-antes.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/skate-actual.jpeg",
    resumen: "Uno de los edificios más emblemáticos del país.",
    introduccion: "Este lugar forma parte de la identidad urbana de Uruguay...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
  },
  {
    id: 4,
    titulo: "Parque Rodó",
    categoria: "Naturaleza",
    imagen: "/proyecto-revista-Front-end-/img/parque-rodo.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/parque-ahora.webp",
    resumen: "un parque emblemático de Montevideo",
    introduccion:
      "Este lugar es un refugio de tranquilidad en medio de la ciudad...",
    historia:
      "El parque fue creado en el siglo XX como un espacio de recreación...",
    caracteristicas:
      "Entre sus atractivos se encuentran los jardines y el lago...",
    importancia:
      "El parque es un punto de encuentro importante para los habitantes de Montevideo...",
    conclusion:
      "La historia de este lugar demuestra la importancia de los espacios verdes en la vida urbana...",
  },
  {
    id: 5,
    titulo: "Palacio Legislativo",
    categoria: "Historia",
    imagen: "/proyecto-revista-Front-end-/img/palacio.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/palacio-actual.jpg",
    resumen: "Uno de los edificios más emblemáticos del país.",
    introduccion: "Este lugar forma parte de la identidad urbana de Uruguay...",
    historia: "El origen de este sitio se encuentra ligado...",
    caracteristicas: "Entre los aspectos más destacados...",
    importancia: "Actualmente este sitio sigue ocupando...",
    conclusion: "La historia de este lugar demuestra...",
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

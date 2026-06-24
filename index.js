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
    titulo: "Plaza Independencia",
    subtitulo: "",
    autor: "",
    categoria: "Historia",
    imagen: "/proyecto-revista-Front-end-/img/plaza-antes.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/plaza-ahora.avif",
    resumen:
      "Uno de los edificios más emblemáticos del país. Este lugar forma parte de la identidad urbana de Uruguay...",
    introduccion:
      "La plaza independencia es el espacio público principal de la ciudad de Montevideo y uno de los lugares más importantes del Uruguay por su historia política y cultural. Está ubicada en un punto clave, entre la Ciudad Vieja y la Ciudad Nueva, lo que la convierte en un lugar que conecta el pasado colonial con el desarrollo moderno de la capital. En el centro se encuentra el Monumento y Mausoleo del prócer nacional Jose Gervasio Artigas, una figura muy importante en la independencia y en la formación del país.",
    historia:
      "El origen de la plaza se remonta al siglo XIX, cuando el lugar donde estaba la antigua Ciudadela se decidió transformar en una plaza pública. Este cambio formó parte de un proceso para ordenar y modernizar la ciudad de Montevideo, siguiendo modelos de ciudades europeas. En 1837, el arquitecto Carlos Zucchi propuso un primer diseño del área, inspirado en la arquitectura francesa, que buscaba organizar los espacios abiertos como lugares de orden y representación del poder. Durante gran parte del siglo XIX, la plaza no tuvo todavía la forma ni el estilo que tiene hoy en día. Recién a comienzos del siglo XX empezó a tomar su aspecto actual. En 1905, el paisajista frances Carlos Thays hizo una investigación muy importante, agregando jardines, fuentes y las 33 palmeras que representan a los Treinta y Tres Orientales. Este cambio no solo mejoró su aspecto, sino que también tuvo un significado simbólico, ya que buscaba fortalecer la identidad nacional dentro del espacio público. El 28 de febrero de 1923 se inaugura el Monumento a Artigas, realizado por el escultor italiano Ángelo Zanelli. Esto hizo que la plaza se convirtiera en el principal lugar de homenaje al prócer nacional. Más adelante, durante la dictadura cívico-militar (1973 - 1985), se construyó el mausoleo subterráneo donde se colocaron los restos de Artigas, inaugurado el 19 de junio de 1977. Este hecho generó distintas opiniones con el paso del tiempo. Se discutió si el gobierno de ese momento usó la figura de Artigas para su propio beneficio político, lo que abre una reflexión sobre cómo se usa la historia.",
    caracteristicas:
      "Desde el punto de vista de la ciudad, la plaza está rodeada por edificios muy importantes como: La Torre Ejecutiva, El Palacio Estévez, El Palacio Salvo y El Teatro Solís. Esto refuerza su importancia como centro político y cultural del país. Además la plaza conecta dos vías muy importantes, la Avenida 18 de Julio y la Peatonal Sarandí, por lo que es un punto donde para mucha gente y se mueve la ciudad.",
    importancia:
      "En la actualidad, la plaza no solo tiene un valor histórico o institucional sino también social. Es un lugar donde la gente se encuentra, se realizan manifestaciones y también actos oficiales, como por ejemplo el cambio de mando presidencial. Sin embargo su significado no es fijo sino que cambia con el tiempo según cómo lo viven las personas y el Estado. Desde una mirada más crítica, la Plaza Independencia puede entenderse como un lugar donde se mezcla la memoria, el poder y la identidad. La existencia del mausoleo de Artigas hace que se planteen preguntas sobre cómo los gobiernos usan figuras históricas para dar más legitimidad a su autoridad. Por eso el espacio público no es neutral, es un lugar donde se discuten y se construyen ideas sobre el pasado y el presente. También la figura de Artigas ha sido interpretada de diferentes maneras a lo largo del tiempo, lo que muestran que la memoria del país no es algo fijo, sino que cambia. La plaza refleja esos cambios, porque lo que en un momento se ve como homenaje, en otro puede verse como una forma de uso público o de construcción de identidad.",
    conclusion:
      "En conclusión, la Plaza Independencia no es solo un lugar de la ciudad, sino un espacio donde se une la historia, la política y la cultura. Su desarrollo muestra cambios desde la sociedad uruguaya desde el siglo XIX hasta hoy en día. Entenderla no es solo mirar su arquitectura o su historia, sino que también pensar como los espacios públicos ayudan a construir la identidad y la memoria de un país.",
  },
  {
    id: 2,
    titulo: "Estación Peñarol",
    categoria: "Industrial",
    imagen: "/proyecto-revista-Front-end-/img/estacion.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/estacion-actual.webp",
    resumen: "un parque emblemático de Montevideo",
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

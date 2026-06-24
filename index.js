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
    subtitulo:
      "Parque Rodó : el pulmón verde de Montevideo que combina historia, cultura y diversión",
    autor: "por Alexandra Rivero",
    categoria: "Naturaleza",
    imagen: "/proyecto-revista-Front-end-/img/parque-rodo.jpg",
    imagenHover: "/proyecto-revista-Front-end-/img/parque-ahora.webp",
    resumen:
      "Un parque donde el pasado y el presente se encuentran bajo los árboles",
    introduccion:
      "El parque José Enrique Rodó , conocido popularmente como Parque Rodó, es uno de los paseos más tradicionales y queridos de Montevideo.  Con un tamaño de 42 hectáreas este maravilloso espacio verde forma parte del patrimonio recreativo y cultural de la ciudad. ",
    historia:
      "Su creación se originó a finales del siglo XIX cuando terrenos del Banco Nacional pasaron a la administración pública y comenzaron a trazar lo que entonces se llamó el Parque Urbano. Los trazos fueron obra de los arquitectos franceses Carlos Thays y Carlos Racine en 1900 y 1902. El parque fue inaugurado oficialmente el 25 de agosto de 1903 y , catorce años más tarde, en 1917 adoptó su nombre actual en homenaje a la muerte del escritor José Enrique Rodó, autor del célebre ensayo Ariel y una de las figuras intelectuales más destacadas de América Latina , fallecido ese mismo año.",

    caracteristicas:
      "Con el tiempo el parque fue acumulando una notable cantidad de estatuas y monumentos, convirtiéndo se en uno de los lugares públicos con la mayor concentración de obras escultóricas. El monumento central es, naturalmente el dedicado al propio Rodó. Encargado al escultor nacional Jose Belloni y fue inaugurado el 27 de febrero de 1947. Entre sus obras más destacadas se encuentra el Lago artificial, construido sobre antiguas canteras de piedra, que sigue siendo su pieza central. El Castillo, levantado en 1903, alberga desde 1935 la primera biblioteca infantil de América Latina, mientras que el Pabellón de la Música con los nombres de Beethoven, Mozart y Wagner grabados en su fachada evoca la aspiración cultural de aquella época. Completa el conjunto escultórico La Source, una figura femenina en hierro fundido y bronce del artista francés Louis Sauvageau, fabricada en 1862 y traída como parte del afán de embellecer el parque al estilo europeo.La Vegetación del parque no es casualidad, es resultado de una decisión estética y filosófica . Thays y Racine combinaron especies ornamentales traídas de Europa, como sauces llorones, plátanos, tipas y eucaliptos , con flora nativa Uruguaya. Su lago artificial, corazón del paisaje, cuenta con cuatro islas donde crecen plantas como carqueja, mburucuyá, chilcas y verbenas, y sirve de refugio permanente para diversas aves acuáticas. En 2024, un proyecto impulsado por el Presupuesto Participativo transformó esas islas en una pequeña reserva natural urbana, incorporando nuevas especies orientadas a atraer picaflores y mariposas. Así, entre los juegos mecánicos y los monumentos, el parque alberga también un ecosistema vivo que pocas veces recibe la atención que merece.",

    importancia:
      "Lo que distingue al Parque Rodó de cualquier otro espacio verde de Montevideo es que este parque brinda naturaleza, cultura y recreación en un solo lugar.  En el mismo predio donde se puede caminar entre monumentos centenarios y sentarse frente al lago, a pocos metros funciona el único parque de diversiones mecánicas de Montevideo con más de un siglo de historia, cuya primera atracción fue la montaña rusa de 1889 antes de que incluso el parque tuviera su nombre actual. En este 2026 el parque tuvo una gran renovación, incorporando una Torre de caída libre con 27 metros de altura, una nueva montaña rusa ( la cual no volvía desde 2013) y juegos como UFO 3D, spin y saltamontes. Sin dejar atrás a los irremplazables juegos clásicos como el mambo, los autitos chocadores y el 360. Estas atracciones convocan a familias enteras a disfrutar de lo que fue y lo que es.",

    conclusion: "falta terminarla ",
    title: "The Rambla as an Extension of Parque Rodó",
    introduction:
      "For many, the walk through the Park does not end there but continues naturally along the Rambla. Every city has its symbols. And the rambla is one of the most defining features of Montevideo. A meeting point between the city and the Río de la Plata that invites aerobic circuits, amateur fishing, and long open-air walks.Its 300 football fields of coastal walkway make it one of the largest socialized coastal spaces in the world.",

    history:
      "Its history begins in the nineteen twenties, when building it was a colossal undertaking, even by the standards of the time. The dimensions of the Rambla Sur stretch as far as forty city blocks launched into the water, with a width of ten cars parked side by side, a surface area equivalent to a concrete mountain the size of ten stacked buildings, and nearly 18 hectares reclaimed from the river. It was born as a symbol of modernity and as a response to concrete urban needs: to define the city's maritime boundary, improve access to neighborhoods far from the center, and create public spaces where workers could enjoy their free time.",

    characteristic:
      " The rambla encompasses several landmarks, including Playa Ramírez, the point where the green of the trees merges with the horizon of the Río de la Plata. Uses overlap without conflict and without anyone planning it. As architect Ernesto Spósito, director of the Intendencia's Heritage Unit, points out, any Montevidean or visitor naturally feels they can go there and claim the space as their own, experiencing heritage as a citizen's right.Just like the Sarandí Breakwater, natural extension of the homonymous street that is born at the Gate of the Citadel and goes several meters into the river. Place of fishermen and ships entering the port, the breakwater also holds a deep memory: the neighborhood that surrounds it, Guruyú, was the scene of the first celebrations of enslaved Africans in colonial times, and today the drums still resound there.",

    importance:
      "The rambla is one of those works a city does not know it needs until it has it. In a world where public space is increasingly privatized or left to deteriorate, Montevideo preserves something extraordinary: 30 kilometers where no one is out of place. Its value lies not only in the concrete or the view of the river, but in what happens there every day without anyone organizing it. That is difficult to build, and even harder to maintain. Montevideo, for now, manages it.",

    end: "",
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

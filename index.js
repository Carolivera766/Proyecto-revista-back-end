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
    subtitulo: "El corazón de Montevideo",
    autor: "por Valentina Bruno",
    categoria: "Historia",

    imagen: "/Proyecto-revista-Front-end-/img/plaza-antes.jpg",
    imagenHover: "/Proyecto-revista-Front-end-/img/plaza-ahora.avif",

    resumen:
      "El corazón de Montevideo y símbolo de la identidad nacional. La Plaza Independencia conecta el pasado y el presente del Uruguay",

    galeria: [
      "/Proyecto-revista-Front-end-/img/plaza independencia noche.jpg",
      "/Proyecto-revista-Front-end-/img/plaza-antes.jpg",
      "/Proyecto-revista-Front-end-/img/plaza-hoy.avif",
    ],

    resenaES: {
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

    resenaEN: {
      title: "A Symbol of Uruguay’s National Identity",
      author: "for Valentina Bruno",
      introduction:
        "The Mausoleum of General José Gervasio Artigas is the place where the remains of the Uruguayan hero José Gervasio Artigas are buried. It is located beneath the equestrian monument dedicated to him in Plaza Independencia, in the center of Montevideo. The remains are formally guarded by the Blandengues Regiment of Artigas. Today, the mausoleum is one of the most important historical and symbolic sites in Uruguay.",
      history:
        "The idea of building a monument to Artigas began in the late nineteenth century during the presidency of Máximo Santos. A project was approved to honor Artigas as the founder of the Eastern nation, and Plaza Independencia was chosen because of its symbolic importance. In 1884, the foundation stone was laid and a sculpture competition was organized, although the winning project was never completed. At the beginning of the twentieth century, during the government of José Batlle y Ordóñez, the project was revived. New laws were approved and an international competition was held to select the final design. The winning proposal belonged to the Italian sculptor Ángel Zanelli, whose monument was inaugurated on February 28, 1923, with official ceremonies, military parades, and public celebrations. Many years later, during the civic-military dictatorship, an underground mausoleum was constructed beneath the monument to permanently house Artigas’ remains. The mausoleum was inaugurated on June 19, 1977, and became the final resting place of Uruguay’s national hero.",
      characteristic:
        "The mausoleum was designed by architects Lucas Ríos Demalde and Alejandro Morón. It was built mainly in granite and features a solemn underground structure. One of its most distinctive elements is an opening above the urn that allows natural light to enter the chamber. The site is permanently guarded by members of the Blandengues Regiment, who perform ceremonial duties in honor of Artigas.",
      importance:
        "The mausoleum is more than a burial site. It represents the memory, values, and legacy of José Gervasio Artigas. It is also an important place for national ceremonies, commemorations, and tributes. Throughout its history, the mausoleum has been the subject of political and social debates, particularly because it was built during the dictatorship and later became a symbol of democratic reflection on the country's past.",
      end: "Today, the Mausoleum of José Gervasio Artigas remains one of Uruguay’s most significant historical landmarks. As the resting place of the nation’s hero, it connects citizens with their history and serves as a powerful symbol of national identity, remembrance, and respect for Artigas’ enduring legacy.",
      foto: [
        "/Proyecto-revista-Front-end-/img/mausoleo1.jpg",
        "/Proyecto-revista-Front-end-/img/mausoleo.jpg",
        "/Proyecto-revista-Front-end-/img/mausoleo2.JPG",
      ],
    },
  },

  {
    id: 2,
    titulo: "Estación Peñarol",
    subtitulo: "Vapor, Hierro y Barrio",
    autor: "Por Carolina Olivera",
    categoria: "Industrial",

    imagen: "/Proyecto-revista-Front-end-/img/estacion.jpg",
    imagenHover: "/Proyecto-revista-Front-end-/img/estacion-actual.webp",

    resumen:
      "La Estación Peñarol y su complejo ferroviario transformaron la forma de trabajar y vivir en Uruguay.",

    galeria: [
      "/Proyecto-revista-Front-end-/img/Vapor.JPG",
      "/Proyecto-revista-Front-end-/img/boletos.jpg",
      "/Proyecto-revista-Front-end-/img/cruce-tren.jpg",
    ],

    resenaES: {
      introduccion:
        "La Estación Peñarol, junto con sus talleres, viviendas obreras y conjunto ferroviario, no es solo un edificio histórico, es el punto de partida de una cadena de transformaciones que modificó para siempre la forma en que los uruguayos vivían, trabajaban y se organizaban en sociedad. Esta reseña histórica recorre ese proceso: desde la llegada del ferrocarril inglés a mediados del siglo XIX hasta la declaración del barrio como Patrimonio Histórico Nacional en 2012, analizando su impacto cultural y social en la identidad uruguaya.",
      historia:
        "Durante la segunda mitad del siglo XIX, Uruguay experimentó un periodo de modernización impulsado por la expansión de los medios de transporte y comunicación. El país buscaba insertarse en la economía mundial, y la inversión extranjera llegó cargada de maquinaria, capitales y trabajadores especializados. En ese contexto, un paraje llamado “Pinerolo”, ubicado a unos diez kilómetros al norte del centro de Montevideo, pasó de ser una zona de quintas y chacras a convertirse en uno de los principales centros industriales del país. La zona era conocida como “Pinarolo”, en referencia a la ciudad italiana de donde provenía Giovanni Battista Crosa, un inmigrante piamontés que instaló allí una pulpería en 1776.\nLa historia comenzó a cambiar en 1866, año en el que se fundó la sociedad anónima “Ferrocarril Central del Uruguay”, de capitales nacionales, responsable en 1869 de la primera corrida de trenes en Uruguay, entre lo que hoy conocemos como Carnelli y Las Piedras. Nueve años después, en 1878, esa empresa fue adquirida por capitales ingleses y pasó a llamarse Central Uruguay Railway (CUR). Con los nuevos dueños llegó también una nueva ambición: construir los talleres ferroviarios más grandes del país.\n En 1890, la compañía inglesa decide trasladar sus talleres principales desde Bella Vista hacia Peñarol, donde el espacio disponible era mayor y el terreno más adecuado para un complejo industrial de gran escala (el nuevo predio de 17 hectáreas, con 22 mil metros cuadrados de taller, permitía construir instalaciones mucho más grandes). Al año siguiente, en 1891, la estación abrió sus puertas.  Ese año marca el verdadero nacimiento del barrio peñarol tal como lo conocemos; no como un asentamiento espontáneo, sino como un proyecto industrial planificado.\n Lo que hizo única a la Estación Peñarol no fue solo su función ferroviaria, sino el entorno social que formó a su alrededor. La empresa construyó una ciudad dentro de la ciudad. Siguiendo el modelo inglés de las “factory towns” (ciudad fábrica donde la empresas provee viviendas, servicios y esparcimiento a sus trabajadores), la Central Uruguay Railway levantó un conjunto único en América Latina.",
      caracteristicas:
        " El conjunto edilicio incluyó una planificación urbana muy elaborada para la época: viviendas diferenciadas según la jerarquía del trabajador; 44 viviendas para obreros y empleados y 8 residencias separadas para el personal superior, una plaza pública, un almacén de ramos generales, el Centro Artesano como espacio cultural y de formación técnica, un puente peatonal y los propios talleres de reparación de locomotoras.  Para 1910, el complejo ferroviario empleaba a cerca de 2000 personas y era el mayor centro industrial del Uruguay. ",
      importancia:
        "La influencia del complejo también fue profunda en el plano social y cultural. Los trabajadores desarrollaron formas de organización colectiva que contribuyeron al surgimiento  del movimiento sindical uruguayo, y fue en ese mismo contexto que, el 28 de setiembre de 1891, en el Centro Artesano, los propios empleados de la compañía fundaron el Central Uruguay Railway Cricket Club, institución que décadas después se convirtieron en el Club Atlético Peñarol, uno de los clubes más laureados de América del Sur.\n Con el paso del tiempo, el ferrocarril fue perdiendo protagonismo en Uruguay. Las políticas de transporte cambiaron, los servicios se fueron reduciendo y los talleres fueron disminuyendo su actividad. Sin embargo, el conjunto ferroviario logró conservar gran parte de su valor histórico y patrimonial. En 1975, el sitio fue declarado Monumento Histórico Nacional. En 2010 se inauguró el museo estación peñarol dentro del propio edificio de la estación, donde hoy se conservan objetos originales como telégrafo, taquillas, y memorias de los empleados que participaron de las dos guerras mundiales. En 2011 fue declarado bien de interés Departamental.\n Desde 2019, la estación no opera para pasajeros debido a las obras del ferrocarril central. Sin embargo el predio sigue activo; trabajan allí unos 150 funcionarios y el museo es administrado por el Círculo de Estudios Ferroviarios del Uruguay. El barrio, ese que comenzó como campo abierto a finales del siglo XIX, sigue siendo hoy barrio obrero, con su plaza,su arquitectura de ladrillo visto y su historia intacta.\n Desde sus inicios, la Estación Peñarol fue un motor de desarrollo para el barrio y para el país. Su actividad impulsó el crecimiento industrial, la formación de una comunidad obrera y la consolidación de una identidad propia. Actualmente, su valor permanece como parte fundamental del patrimonio histórico y cultural del Uruguay.",
      conclusion:
        "La historia de la Estación de Peñarol y su entorno industrial, resume, la historia del Uruguay moderno en miniatura. En un solo barrio se unen los grandes  procesos que definieron al país; la llegada de la inversión extranjera y su impacto territorial, la diferencia de clase, la formación de la clase obrera organizada, la influencia de la inmigracion europea en la cultura local, y la transformación de un espacio rural en un espacio urbano con identidad propia.\n Lo que más me resulta significativo de esta historia es la paradoja que encierra; Peñarol fue construido por una empresa británica, con capitales extranjeros. Sin embargo, los trabajadores que vivieron allí (uruguayos, ingleses, italianos, alemanes) lo convirtieron en algo genuinamente propio. Lo que comenzó como una inversión económica se transformó en una comunidad con identidad, cultura e historia.",
    },

    resenaEN: {
      title: "Born on the Rails",
      author: "for Carolina Olivera",
      introduction:
        "Have you ever wondered why Peñarol wears black and yellow, or why its supporters proudly call themselves &quot;Carboneros&quot;? Most people know Peñarol as one of the most successful football clubs in Uruguay and South America. However, its story began long before famous players, championships, and crowded stadiums. The origins of the club are closely connected to railways, British workers, and the development of a neighborhood in Montevideo. Understanding this history helps us see why Peñarol is much more than a football team.",
      history:
        "The story began in 1891 with the creation of the Central Uruguay Railway Cricket Club (CURCC). The club was founded by employees of the British railway company Central Uruguay Railway. At first, different sports were practiced, but football soon became the most popular activity. During that period, many British workers lived and worked in Uruguay. They brought new ideas, technologies, and customs with them. One of those customs was football, a sport that was still new in the country.",
      characteristic:
        "As football became more popular, the club grew and developed a strong connection with the community around it. The railway workshops were located in the Peñarol  neighborhood, where many workers and their families lived. Over time, the institution became closely linked to the area and eventually adopted the name Club Atlético Peñarol. In this way, the history of the club became connected to the history of the neighborhood itself. Another interesting aspect of Peñarol&#39;s origin is its colors. The black and yellow colors were inspired by a famous British locomotive called &quot;The Rocket&quot;, designed by engineer George Stephenson. Today, these colors are recognized by football fans throughout South America. The club&#39;s nickname, &quot;Carbonero&quot;, also reflects its railway roots. It comes from the coal that was used to power steam locomotives. Even today, the nickname reminds supporters of the club&#39;s connection to the railway industry.",
      importance:
        "Peñarol&#39;s origin is important because it tells a story that goes beyond sport. It shows how immigration, industry, and cultural exchange influenced Uruguay&#39;s development. Understanding these origins helps us appreciate how different cultures contributed to the country&#39;s identity and how football became such an important part of Uruguayan life. The club became a symbol of effort, community, and identity. If those railway workers had not brought football to Uruguay, the history of the club might have been very different.",
      end: "In conclusion, Peñarol is not only a football club but also an important part of Uruguayan history. I believe that understanding its origins helps us appreciate its importance in Uruguayan culture. More than one hundred years later, its railway heritage continues to live through its name, colors, nickname, and supporters. Its story reminds us that every great institution has an origin, and that those origins continue to shape the present.",
      foto: [
        "/Proyecto-revista-Front-end-/img/curcc1900.jpg",
        "/Proyecto-revista-Front-end-/img/cruce-tren.jpg",
        "/Proyecto-revista-Front-end-/img/curcc_plantel.png",
      ],
    },
  },

  {
    id: 3,
    titulo: "Skatepark Buceo",
    subtitulo: "",
    autor: "por Julieta Gonzalez",
    categoria: "Cultural",

    imagen: "/Proyecto-revista-Front-end-/img/skate-antes.jpg",
    imagenHover: "/Proyecto-revista-Front-end-/img/skate-actual.jpeg",

    resumen: "Uno de los edificios más emblemáticos del país.",

    galeria: [
      "/Proyecto-revista-Front-end-/img/skate-antes.jpg",
      "/Proyecto-revista-Front-end-/img/skate-actual.jpeg",
      "/Proyecto-revista-Front-end-/img/skatepark.png",
    ],

    resenaES: {
      subtitulo: "",
      introduccion:
        "Este lugar forma parte de la identidad urbana de Uruguay...",
      historia: "El origen de este sitio se encuentra ligado...",
      caracteristicas: "Entre los aspectos más destacados...",
      importancia: "Actualmente este sitio sigue ocupando...",
      conclusion: "La historia de este lugar demuestra...",
    },

    resenaEN: {
      title: "",
      author: "for Julieta Gonzalez",
      introduction: "",
      history: "",
      characteristic: "",
      importance: "",
      end: "",
      foto: [
        "/Proyecto-revista-Front-end-/img/skate-antes.jpg",
        "/Proyecto-revista-Front-end-/img/skate-actual.jpeg",
        "/Proyecto-revista-Front-end-/img/skatepark.png",
      ],
    },
  },

  {
    id: 4,
    titulo: "Parque Rodó",
    subtitulo:
      "Parque Rodó : el pulmón verde de Montevideo que combina historia, cultura y diversión",
    autor: "por Alexandra Rivero",
    categoria: "Naturaleza",

    imagen: "/Proyecto-revista-Front-end-/img/parque-rodo.jpg",
    imagenHover: "/Proyecto-revista-Front-end-/img/parque-ahora.webp",

    resumen:
      "Un parque donde el pasado y el presente se encuentran bajo los árboles",

    galeria: [
      "/img/estacion-actual.webp",
      "/img/estacion2.jpg",
      "/img/estacion3.jpg",
    ],

    resenaES: {
      introduccion:
        "El parque José Enrique Rodó , conocido popularmente como Parque Rodó, es uno de los paseos más tradicionales y queridos de Montevideo.  Con un tamaño de 42 hectáreas este maravilloso espacio verde forma parte del patrimonio recreativo y cultural de la ciudad. ",
      historia:
        "Su creación se originó a finales del siglo XIX cuando terrenos del Banco Nacional pasaron a la administración pública y comenzaron a trazar lo que entonces se llamó el Parque Urbano. Los trazos fueron obra de los arquitectos franceses Carlos Thays y Carlos Racine en 1900 y 1902. El parque fue inaugurado oficialmente el 25 de agosto de 1903 y , catorce años más tarde, en 1917 adoptó su nombre actual en homenaje a la muerte del escritor José Enrique Rodó, autor del célebre ensayo Ariel y una de las figuras intelectuales más destacadas de América Latina , fallecido ese mismo año.",

      caracteristicas:
        "Con el tiempo el parque fue acumulando una notable cantidad de estatuas y monumentos, convirtiéndo se en uno de los lugares públicos con la mayor concentración de obras escultóricas. El monumento central es, naturalmente el dedicado al propio Rodó. Encargado al escultor nacional Jose Belloni y fue inaugurado el 27 de febrero de 1947. Entre sus obras más destacadas se encuentra el Lago artificial, construido sobre antiguas canteras de piedra, que sigue siendo su pieza central. El Castillo, levantado en 1903, alberga desde 1935 la primera biblioteca infantil de América Latina, mientras que el Pabellón de la Música con los nombres de Beethoven, Mozart y Wagner grabados en su fachada evoca la aspiración cultural de aquella época. Completa el conjunto escultórico La Source, una figura femenina en hierro fundido y bronce del artista francés Louis Sauvageau, fabricada en 1862 y traída como parte del afán de embellecer el parque al estilo europeo.La Vegetación del parque no es casualidad, es resultado de una decisión estética y filosófica . Thays y Racine combinaron especies ornamentales traídas de Europa, como sauces llorones, plátanos, tipas y eucaliptos , con flora nativa Uruguaya. Su lago artificial, corazón del paisaje, cuenta con cuatro islas donde crecen plantas como carqueja, mburucuyá, chilcas y verbenas, y sirve de refugio permanente para diversas aves acuáticas. En 2024, un proyecto impulsado por el Presupuesto Participativo transformó esas islas en una pequeña reserva natural urbana, incorporando nuevas especies orientadas a atraer picaflores y mariposas. Así, entre los juegos mecánicos y los monumentos, el parque alberga también un ecosistema vivo que pocas veces recibe la atención que merece.",

      importancia:
        "Lo que distingue al Parque Rodó de cualquier otro espacio verde de Montevideo es que este parque brinda naturaleza, cultura y recreación en un solo lugar.  En el mismo predio donde se puede caminar entre monumentos centenarios y sentarse frente al lago, a pocos metros funciona el único parque de diversiones mecánicas de Montevideo con más de un siglo de historia, cuya primera atracción fue la montaña rusa de 1889 antes de que incluso el parque tuviera su nombre actual. En este 2026 el parque tuvo una gran renovación, incorporando una Torre de caída libre con 27 metros de altura, una nueva montaña rusa ( la cual no volvía desde 2013) y juegos como UFO 3D, spin y saltamontes. Sin dejar atrás a los irremplazables juegos clásicos como el mambo, los autitos chocadores y el 360. Estas atracciones convocan a familias enteras a disfrutar de lo que fue y lo que es.",

      conclusion: "falta terminarla ",
    },

    resenaEN: {
      title: "The Rambla as an Extension of Parque Rodó",
      author: "for Alexandra Rivero",
      introduction:
        "For many, the walk through the Park does not end there but continues naturally along the Rambla. Every city has its symbols. And the rambla is one of the most defining features of Montevideo. A meeting point between the city and the Río de la Plata that invites aerobic circuits, amateur fishing, and long open-air walks.Its 300 football fields of coastal walkway make it one of the largest socialized coastal spaces in the world.",

      history:
        "Its history begins in the nineteen twenties, when building it was a colossal undertaking, even by the standards of the time. The dimensions of the Rambla Sur stretch as far as forty city blocks launched into the water, with a width of ten cars parked side by side, a surface area equivalent to a concrete mountain the size of ten stacked buildings, and nearly 18 hectares reclaimed from the river. It was born as a symbol of modernity and as a response to concrete urban needs: to define the city's maritime boundary, improve access to neighborhoods far from the center, and create public spaces where workers could enjoy their free time.",

      characteristic:
        " The rambla encompasses several landmarks, including Playa Ramírez, the point where the green of the trees merges with the horizon of the Río de la Plata. Uses overlap without conflict and without anyone planning it. As architect Ernesto Spósito, director of the Intendencia's Heritage Unit, points out, any Montevidean or visitor naturally feels they can go there and claim the space as their own, experiencing heritage as a citizen's right.Just like the Sarandí Breakwater, natural extension of the homonymous street that is born at the Gate of the Citadel and goes several meters into the river. Place of fishermen and ships entering the port, the breakwater also holds a deep memory: the neighborhood that surrounds it, Guruyú, was the scene of the first celebrations of enslaved Africans in colonial times, and today the drums still resound there.",

      importance:
        "The rambla is one of those works a city does not know it needs until it has it. In a world where public space is increasingly privatized or left to deteriorate, Montevideo preserves something extraordinary: 30 kilometers where no one is out of place. Its value lies not only in the concrete or the view of the river, but in what happens there every day without anyone organizing it. That is difficult to build, and even harder to maintain. Montevideo, for now, manages it.",

      end: "",
      foto: [
        "/Proyecto-revista-Front-end-/img/estacion.jpg",
        "/Proyecto-revista-Front-end-/img/estacion-actual.webp",
        "/Proyecto-revista-Front-end-/img/estacion-actual.webp",
      ],
    },
  },

  {
    id: 5,
    titulo: "Palacio Legislativo",
    subtitulo: "",
    categoria: "Historia",

    imagen: "/Proyecto-revista-Front-end-/img/palacio.jpg",
    imagenHover: "/Proyecto-revista-Front-end-/img/palacio-actual.jpg",

    resumen: "Uno de los edificios más emblemáticos del país.",

    galeria: [
      "/img/estacion-actual.webp",
      "/img/estacion2.jpg",
      "/img/estacion3.jpg",
    ],
    resenaES: {
      introduccion:
        "Este lugar forma parte de la identidad urbana de Uruguay...",
      historia: "El origen de este sitio se encuentra ligado...",
      caracteristicas: "Entre los aspectos más destacados...",
      importancia: "Actualmente este sitio sigue ocupando...",
      conclusion: "La historia de este lugar demuestra...",
    },

    resenaEN: {
      title: "",
      author: "for ",
      introduction: "",
      history: "",
      characteristic: "",
      importance: "",
      end: "",
      foto: [
        "/Proyecto-revista-Front-end-/img/estacion.jpg",
        "/Proyecto-revista-Front-end-/img/estacion-actual.webp",
        "/Proyecto-revista-Front-end-/img/estacion-actual.webp",
      ],
    },
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

export const sections = [
   {
    id: 'home',
    label: 'Inicio',
    component: (
      <div>
        <h1 className="text-2xl font-bold">Bienvenida</h1>
        <p>
          Te damos la bienvenida a la 8ª edición del Congreso GEOMARE, un espacio de encuentro, 
          aprendizaje e intercambio entre estudiantes de doctorado de las ciencias del mar y de la tierra. 
          Organizado por y para estudiantes, el congreso busca fomentar redes colaborativas y dar visibilidad 
          a investigaciones en curso.
        </p>
      </div>
    ),
  },
  {
    id: 'about',
    label: 'Sobre el Congreso',
    component: (
      <div>
        <h1 className="text-2xl font-bold">Sobre el Congreso</h1>
        <p>
          GEOMARE es una iniciativa impulsada por estudiantes de doctorado de la Universitat de Barcelona
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          experiencias en investigación. Esta XXXX edición reafirma nuestro compromiso con una ciencia
          abierta, colaborativa y con vocación interdisciplinaria.
        </p>
      </div>
    ),
  },
  {
    id: 'abstracts',
    label: 'Envío de Resúmenes',
    component: (
      <div className="bg-earth-background text-earth-rock">
        <h1 className="text-2xl font-bold">Envío de Resúmenes</h1>
  <h1 className="text-earth-ocean">Bienvenidos al Congreso GEOMARE</h1>
  <button className="bg-earth-moss hover:bg-earth-forest text-white px-4 py-2 rounded">
    Registrarse
  </button>
</div>
    ),
  },
  {
    id: 'schedule',
    label: 'Programa',
    component: (
      <div>
        <h1 className="text-2xl font-bold">Programa</h1>
        <p>
          El congreso se desarrollará durante el dia de St. Albert en Noviembre XX en la Facultat de Ciències de la Terra. 
          Contará con presentaciones orales, sesiones de pósters y algunas actividades de networking. 
          El programa detallado estará disponible próximamente.
        </p>
      </div>
    ),
  },
  {
    id: 'sponsors',
    label: 'Entidades Colaboradoras',
    component: (
      <div>
        <h1 className="text-2xl font-bold">Entidades Colaboradoras</h1>
        <p>
          Este congreso es posible gracias al apoyo de:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>Universitat de Barcelona – Facultat de Ciències de la Terra</li>
          <li>Institut de Ciències del Mar (ICM-CSIC)</li>
          <li>Institut Geociències Barcelona (GEO3BCN-CSIC)</li>
          <li>Escuela de Doctorado – Universitat de Barcelona</li>
        </ul>
      </div>
    ),
  },
];


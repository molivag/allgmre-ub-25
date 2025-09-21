// src/components/Inicio.tsx
function Home() {
  return (
    <div>
      <h1 >GEOMARE Speeches</h1>
      <p>
        Te damos la bienvenida a la 8ª edición del Congreso GEOMARE, un espacio de encuentro,
      </p>
      <p> The 2025 edition of GeoMare Speeches will take place in Barcelona this November. This year, the event is organized by PhD candidates from the Faculty of Earth Sciences at the University of Barcelona, in collaboration with researchers from Geosciences Barcelona (GEO3BCN-CSIC), Centro de Estudios Avanzados de Blanes (CEAB-CSIC), and Instituto de Ciencias del Mar (ICM-CSIC). </p>


      <div>
        <img
          className=" mt-20 mx-auto xsm:size-auto md:w-1/2 mb-28"
          src="./../../public/caru/LIRA.png"
          alt="Organization of the Marine Biodiversity and Evolution Department"
        />
        {/* <p className="p text-base text-center text-green-400 text-opacity-90 xsm:text-justify md:text-left px-2"> */}
        {/*   This is a sample text used solely for demonstration purposes. Its goal is to showcase how the applied text styling—such as transparency—appears in relation to the previous image or layout. The content itself has no informational value and can be easily replaced with the final text when available. */}
        {/* </p> */}
      </div>


      <h2> What is GeoMare Speeches?</h2>

      <p> GeoMare Speeches is an annual short-one-day scientific event created by and directed by early-career researchers working in Earth and Marine Sciences mainly. Its main goal is to provide a relaxed yet professional space, where scientists can share their ongoing projects, discuss ideas, establish connections and build future collaborations across disciplines. </p>

      <p> The conference is hosted at the Faculty of Earth Sciences at University of Barcelona, and also celebrates the legacy and future of geological, biological and marine research in the world. </p>

      <p> Whether you're just beginning your PhD or getting about to defend your thesis, GeoMare Speeches 2025, offers a good opportunity to connect with likeminded researchers from Earth and Marine Science of our institutions. </p>

      <h4>The conference will include:</h4>

      <ul className="list-disc list-inside ">
        <li><p className="inline">Short talks and poster sessions by early-career researchers</p></li>
        <li><p>Networking and gathering</p></li>

        <li><p>A collaborative and supportive academic event</p></li>

      </ul>



      <h2>The St. Albert Day </h2>

      <p> On the week that celebrates the day of Saint Albert, traditionally considered the patron saint of Science, the Faculty of Earth Sciences celebrates its academic and scientific community through a wide range of activities. Among these, the GeoMare Speeches stand out as an important event dedicated to the new generation of Earth and Marine scientists. </p>

      <p> The Faculty of Earth Sciences from the University of Barcelona has an academic tradition dating back to 1910. Back then, geology was first taught as part of the Natural Sciences degree. In 1953, geology became an independent degree, later evolving into current Geology and Marine Sciences programs. During this period, the Faculty of Earth Sciences has played a key role in science education in both Catalonia and Spain. With its strong focus on fieldwork, laboratory training, and interdisciplinary collaboration, it remains at the forefront of addressing today’s pressing environmental and scientific challenges. </p>

      <p>The GeoMare Speeches 25 aim to bring together early-career scientists carrying out research across different subjects of Earth and Marine Sciences. This conference offers a space for sharing ongoing studies, exchanging ideas, building connections and establishing collaborations for future research. </p>



      <h2>Faculty of Earth Science</h2>

      <p>The Faculty of Earth Sciences at the University of Barcelona is a leading center in Spain for the study of geosciences and marine sciences. With a long-standing tradition in training geologists, oceanographers, and environmental engineers, the faculty combines teaching with high-level research in fields ranging from Earth and ocean dynamics to paleontology and natural resource management. Its undergraduate, master’s, and doctoral programs are supported by modern laboratories, extensive fieldwork, and active collaboration with renowned institutions such as the Spanish National Research Council (CSIC) and the university’s own Scientific and Technological Centers. </p>

      <p>Hosting the GEOMARE conference in this setting is particularly fitting, not only because the faculty works directly in the thematic areas of the event, but also because its academic community brings together researchers and students who contribute both expertise and enthusiasm. Its location in Barcelona, a city with strong international visibility and excellent transport links, makes it easy to attract participants from across Spain and abroad. Furthermore, the faculty’s open and interdisciplinary spirit reflects the goals of GEOMARE, providing an accessible and collaborative forum for young researchers in Earth and Marine sciences.</p>

    </div>
  );
}

export default Home;

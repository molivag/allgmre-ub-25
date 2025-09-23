
// src/components/Inicio.tsx
function Home() {
  return (
    <div>
      <h1 className="mb-12 mt-0" >GeoMare Speeches</h1>
      <p>
        Welcome to the 8th edition of the GeoMare Speeches Conference, a meeting point designed to bring together the next generation of Earth and Marine scientists. What began as a modest initiative has now become a consolidated event within the academic calendar of the Faculty of Earth Sciences at the University of Barcelona.    </p>

      <p>The 2025 edition of GeoMare Speeches will take place in Barcelona this November. This year, the event is organized by PhD candidates from the Faculty of Earth Sciences at the University of Barcelona, in collaboration with researchers from Geosciences Barcelona (GEO3BCN-CSIC), Centro de Estudios Avanzados de Blanes (CEAB-CSIC), and the Instituto de Ciencias del Mar (ICM-CSIC). Together, these institutions represent a vibrant research community at the forefront of geosciences and marine studies in Spain and Europe.</p>

      <p>GeoMare Speeches offers a unique opportunity to showcase the diversity of ongoing projects, from geology and geophysics to oceanography, biology, and environmental sciences. More than just a series of presentations, it is a space for dialogue, for meeting peers, and for building a sense of community among early-career scientists. With a strong emphasis on interdisciplinarity, the event encourages participants to cross boundaries, learn from one another, and find new ways to collaborate in addressing the pressing scientific and environmental challenges of our time.</p>

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


      <section>
        <h2> What is GeoMare Speeches?</h2>

        <p>
          GeoMare Speeches is an annual, one-day scientific event created and led by early-career researchers working mainly in Earth and Marine Sciences. Its primary goal is to provide a relaxed yet professional space where young scientists can present their ongoing projects, share preliminary results, discuss innovative approaches, and explore collaborations across disciplines.</p>

        <p>The conference is hosted at the Faculty of Earth Sciences of the University of Barcelona and celebrates both the legacy and the future of geological, biological, and marine research. Whether you are just beginning your PhD journey or preparing to defend your thesis, GeoMare Speeches 2025 offers a valuable opportunity to engage with like-minded researchers and expand your academic network </p>

        <h3 className="mt-12">The conference will include:</h3>

        <ul className="list-disc list-inside text-earth-poster1 text-2xl font-medium mb-12">
          <li> <em>Short talks and poster sessions</em> highlighting ongoing research by early-career scientists</li>
          <li> <em>Networking and gathering</em>  aimed at fostering dialogue and future collaborations</li>

          <li> <em>An inclusive and supportive environment</em> that values both professional development and scientific curiosity</li>

        </ul>

        <p>By bringing together young researchers from different backgrounds and institutions, GeoMare Speeches reinforces the idea that science grows stronger when shared, discussed, and challenged in an open and collaborative atmosphere.</p>


      </section>


      <section>
        <h2>The St. Albert Day </h2>

        <p> The conference takes place during the week dedicated to Saint Albert, traditionally considered the patron saint of Science. This celebration has long been part of the academic culture of the University of Barcelona, when different scientific faculties used to come together for a joint commemoration of their shared identity. Today, the Faculty of Earth Sciences honors this tradition with a variety of activities that highlight the value of research, teaching, and community. Among them, the GeoMare Speeches have become a key event dedicated to the new generation of Earth and Marine scientists.</p>

        <p> The Faculty of Earth Sciences itself has a rich academic tradition dating back to 1910, when geology was first taught within the Natural Sciences degree. In 1953, geology became an independent degree, later evolving into today’s Geology and Marine Sciences programs. Over the decades, the faculty has played a vital role in science education and research in both Catalonia and Spain, promoting rigorous fieldwork, laboratory practice, and interdisciplinary collaboration.</p>

        <p> Against this backdrop, the GeoMare Speeches 2025 seek to honor the past while looking toward the future. By providing a platform for early-career scientists to share their work, exchange ideas, and establish collaborations, the event contributes to strengthening the research community and ensuring that scientific progress remains both innovative and inclusive.</p>

      </section>

      <h2>Faculty of Earth Science</h2>

      <p>The Faculty of Earth Sciences at the University of Barcelona is a leading center in Spain for the study of geosciences and marine sciences. With a long-standing tradition in training geologists, oceanographers, and environmental engineers, the faculty combines teaching with high-level research in fields ranging from Earth and ocean dynamics to paleontology and natural resource management. Its undergraduate, master’s, and doctoral programs are supported by modern laboratories, extensive fieldwork, and active collaboration with renowned institutions such as the Spanish National Research Council (CSIC) and the university’s own Scientific and Technological Centers. </p>

      <p>Hosting the GEOMARE conference in this setting is particularly fitting, not only because the faculty works directly in the thematic areas of the event, but also because its academic community brings together researchers and students who contribute both expertise and enthusiasm. Its location in Barcelona, a city with strong international visibility and excellent transport links, makes it easy to attract participants from across Spain and abroad. Furthermore, the faculty’s open and interdisciplinary spirit reflects the goals of GEOMARE, providing an accessible and collaborative forum for young researchers in Earth and Marine sciences.</p>

      <div className="mt-16">
        <img
          className=" mx-auto xsm:size-auto md:w-[90%]"
          src="./img/Facultat.jpg"
          alt="Organization of the Marine Biodiversity and Evolution Department"
        />
        <p className="text-base text-center text-gray-500 text-opacity-90 xsm:text-justify px-2">
          Acces to Faculty of Earth Science from main garden
        </p>
      </div>

    </div>
  );
}

export default Home;

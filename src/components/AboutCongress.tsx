import Team from '../components/team_members'

function About() {
  return (
    <div >
      <section  >
        <h1 className='mt-0' id="/geomare-speeches/about">About the conference</h1>
        <p>
          The GeoMare Speeches Conference was created with the idea of offering young scientists an inclusive and dynamic platform to share their research experiences. This 8th edition reaffirms our commitment to building a scientific forum that is both accessible and horizontal, where early-career researchers can present their latest findings, test new methodologies, and exchange ideas in a collaborative atmosphere.</p>

        <p>Beyond being a traditional academic meeting, GeoMare Speeches is about creating a space where knowledge is shared openly, questions are welcomed, and scientific curiosity is celebrated. By encouraging dialogue across disciplines, the conference aims to foster a community that values diversity of perspectives and recognizes the importance of collaboration in addressing today’s environmental and scientific challenges.
        </p>
      </section>

      <section>
        <h2> GEOMARE Initiative </h2>

        <p> GeoMare Speeches was launched in 2017 with the goal of connecting young researchers working in a broad range of Earth and Marine Sciences. It offers a dynamic space to present current research, share ideas, build networks, and gain valuable experience—all within a friendly, inclusive, and supportive environment.</p>

        <p> The 2025 edition will be held on the 12th of November, at the Faculty of Earth Sciences of the University of Barcelona (UB). It is organised by PhD candidates from the Universitat de Barcelona (UB) and Geosciences Barcelona (GEO3BCN-CSIC), together with researchers from two research centres of the Spanish National Research Council (CSIC): the Centro de Estudios Avanzados de Blanes (CEAB-CSIC) and the Instituto de Ciencias del Mar (ICM-CSIC).</p>

        <p> Over the years, the initiative has grown into a reference point for early-career scientists in Barcelona, helping them to present their research in a professional yet welcoming setting while also building bridges with the broader scientific community.</p>

        <div className='mt-18'>
          <img
            className=" mx-auto xsm:size-auto md:w-1/2"
            src="/geomare-speeches/public/caru/aboutCONF.jpg"
            alt="Organization of the Marine Biodiversity and Evolution Department"
          />
          <p className="text-base text-center text-gray-500 text-opacity-90 xsm:text-justify px-2">
            {/* Esta foto dentyro del mismo div y uno a lado de la otra */}
          </p>
        </div>

      </section>

      <section>

        <h2> Why join? </h2>
        <p> GeoMare Speeches is more than just a conference—it’s a community-driven event designed to support early-career researchers and students in their academic journey. By participating, you become part of a collaborative network of scientists committed to advancing Earth and Marine Sciences in Barcelona and beyond.
        </p>

        <p>  Here’s why you should join:</p>

        <ul className='ml-5 mb-5 list-disc list-inside text-earth-poster1 sm:text-base lg:text-2xl lg:font-medium'>
          <li>Free registration! </li>
          <li>Present your work to an interdisciplinary audience </li>
          <li>Get feedback and exchange ideas across Earth and Marine research </li>
          <li>Meet and network with fellow scientists based in Barcelona </li>
          <li>Boost your CV with a recognised scientific conference </li>
        </ul>
        <p>Whether you are presenting for the first time or looking to expand your professional network, GeoMare Speeches provides the ideal setting to grow as a researcher.</p>
      </section>

      <section>
        <h2> Who can participate? </h2>
        <p> GeoMare Speeches is open to all Master’s students, PhD candidates, and early-career researchers based in Barcelona and working in Earth or Marine Sciences. Participants can choose to present their work either through an oral presentation or a poster session.</p>

        <p>This inclusive format ensures that everyone, regardless of their stage of research, has the chance to share ideas and engage with the community.</p>

        <p>
          Don’t miss this opportunity to present your work and connect with your peers – [register here] (link to form).</p>

      </section>




      <section>
        <h2>What is the cost?</h2>
        <p>
          Participation in GeoMare Speeches is completely free of charge! Thanks to the generous support of the Faculty of Earth Sciences at the University of Barcelona—through the office of the Vice-Dean—this event is fully funded, allowing us to make it accessible to all participants.</p>

        <p>By removing the financial barrier, we aim to encourage the widest possible participation from students and early-career scientists. Free registration not only reflects the commitment of the Faculty to supporting young researchers, but also strengthens the idea that science should be open, collaborative, and inclusive.</p>

        <div className='mt-18'>
          <img
            className=" mx-auto xsm:size-auto md:w-1/2"
            src="/geomare-speeches/public/caru/LIRA.png"
            alt="Organization of the Marine Biodiversity and Evolution Department"
          />
          <p className="text-base text-center text-gray-500 text-opacity-90 xsm:text-justify px-2">
            {/* Esta foto dentyro del mismo div y uno a lado de la otra */}
          </p>
        </div>

      </section>


      <h2>Topics</h2>

      <ul className="list-inside text-earth-poster1 list-decimal sm:text-base space-y-2 lg:text-2xl lg:font-medium mb-2 font-medium">
        <li> Crystallography</li>
        <li> Geological hazards and geomorphology</li>
        <li> Geophysics and geophysical prospecting</li>
        <li> Hydrogeology and environmental geology</li>
        <li> Mineralogy and mineral deposits</li>
        <li> Marine biology</li>
        <li> Marine ecology</li>
        <li> Maritime engineering</li>
        <li> Marine geosciences</li>
        <li> Management of coastal and marine areas</li>
        <li> Numerical and Computational Geosciences</li>
        <li>Paleontology</li>
        <li> Petrology and geochemistry</li>
        <li> Physical and chemical oceanography</li>
        <li> Stratigraphy and basin analysis</li>
        <li> Structural geology</li>
      </ul>





      <section>

        <hr className='bg-earth2-azulos' />
        <h2>Scientific committee</h2>
        <p>
          All presentations will be reviewed by the Scientific Committee, which will carefully evaluate submissions based on their scientific quality, clarity of communication, and overall presentation skills. The most outstanding contributions will be recognised with awards during the closing session of the conference.</p>

        <p>The committee is composed of researchers from the Faculty of Earth Sciences as well as external experts from other institutions. This structure ensures objectivity, impartiality, and a broad evaluation perspective. By involving both internal and external members, the committee reflects the collaborative nature of GeoMare and guarantees a fair and constructive review process for all participants.</p>


        <p>All presentations will be reviewed by the Scientific Committee, which will evaluate submissions based on scientific quality, clarity, and presentation skills. The most outstanding contributions will be awarded during the closing session. </p>

        {/* <h3>Members</h3> */}


        <Team />
      </section>

















    </div>
  )
}

export default About;

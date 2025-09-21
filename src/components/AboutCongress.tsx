import Team from '../components/team_members'

function About() {
  return (
    <div>
      <section>
        <h1>About the conference</h1>
        <p>
          experiencias en investigación. Esta XXXX edición reafirma nuestro compromiso con una ciencia
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          con el objetivo de ofrecer un foro accesible y horizontal para compartir avances, metodologías y
          abierta, colaborativa y con vocación interdisciplinaria.
        </p>

        <h2> GEOMARE Initiative </h2>

        <p> GEOMARE Speeches was launched in 2017 with the goal of connecting young researchers working in a broad range of Earth and Marine Sciences.
          It offers a dynamic space to present current research, share ideas, build networks, and gain valuable experience - all within a friendly, inclusive,
          and supportive environment.
        </p>

        <p>The 2025 edition will be held on the 12th of November, in the Faculty of Earth Sciences of the University of Barcelona (UB).
          It is organised by PhD candidates from the Universitat de Barcelona (UB) and Geosciences Barcelona (GEO3BCN-CSIC), and from two research centres
          of the Spanish National Research Council (CSIC): the Centro de Estudios Avanzados de Blanes (CEAB-CSIC) and Instituto de Ciencias del Mar (ICM-CSIC).

        </p>


        <div>
          <img
            className=" mx-auto xsm:size-auto md:w-1/2 mb-28"
            src="./../../public/caru/aboutCONF.jpg"
            alt="Organization of the Marine Biodiversity and Evolution Department"
          />
          {/* <p className="p text-base text-center text-green-400 text-opacity-90 xsm:text-justify md:text-left px-2"> */}
          {/*   This is a sample text used solely for demonstration purposes. Its goal is to showcase how the applied text styling—such as transparency—appears in relation to the previous image or layout. The content itself has no informational value and can be easily replaced with the final text when available. */}
          {/* </p> */}
        </div>


        
        <h2> Why join? </h2>
        <p> GEOMARE Speeches is more than just a conference – it’s a community-driven event that supports early-career
          researchers and students in their academic journey. Here’s why you should join:
        </p>

        <ul className='text-earth-text text-xl font-sans'>
          <li>Free registration! </li>
          <li>Present your work to an interdisciplinary audience </li>
          <li>Get feedback and exchange ideas across Earth and Marine research </li>
          <li>Meet and network with fellow scientists based in Barcelona </li>
          <li>Boost your CV with a recognised scientific conference </li>
        </ul>

        <h2> Who can participate? </h2>
        <p> GEOMARE Speeches is open to all Master's students, PhD candidates, and early-career researchers based in Barcelona
          and working in Earth or Marine Sciences. Participants can choose to present their research either through an oral presentation or a poster session. </p>

        <p> Don’t miss this opportunity to share your work and connect with your peers – [register here] (link to form). </p>

        <h2>What is the cost?</h2>
        <p> Participation is completely free of charge! </p>

        <div>
          <img
            className=" mx-auto xsm:size-auto md:w-1/2"
            src="./../../public/caru/LIRA.png"
            alt="Organization of the Marine Biodiversity and Evolution Department"
          />
          <p className="p text-base text-center text-green-400 text-opacity-90 xsm:text-justify md:text-left px-2">
            Esta foto dentyro del mismo div y uno a lado de la otra
          </p>
        </div>


        <h2>Topics</h2>

        <ul className="list-inside text-earth-text list-disc text-xl mb-10">
          <li> <p className="inline">Crystallography</p></li>
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

      </section>




      <section>


        <hr className='bg-earth2-azulos'/>
        <h2>Scientific committee</h2>
        <p> All presentations will be reviewed by the Scientific Committee, which will evaluate submissions based on scientific quality, clarity, and presentation skills. The most outstanding contributions will be awarded during the closing session. </p>

        <h3>Members</h3>



        <h2> Organizing Committee </h2>

        <ul>
          <li>Marco Oliva Gutiérrez: UB</li>
          <li>Anja Boekholt: ICM-CSIC</li>
          <li>Marina Briones: ICM-CSIC</li>
          <li>Laura Acosta: UB</li>
          <li>Madhusudan Sharma: GEO3BCN-CSIC</li>
          <li>Gustavo Lacerda Orita: UB</li>
          <li>Sara Espinosa: UB</li>
          <li>Irene Llamas Cano: UB</li>
          <li>Writabrata Roy: ICM-CSIC</li>
          <li>Samuel Jorde: GEO3BCN-CSIC</li>
        </ul>

      </section>

      <Team />
















    </div>
  )
}

export default About;

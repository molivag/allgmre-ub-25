const Team = () => {
  return (
    <div className="px-4 py-2 lg:py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"> */}
          {/*   Core Team */}
          {/* </p> */}
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-pruebah1 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="55"
                height="24"
              />
            </svg>
            <span className="relative text-pruebah1">Organizing</span>
          </span>{' '}
          <span className="text-pruebah1">Committee</span>
        </h2>
        <p> GEOMARE Speeches 2025 is organised by a dedicated team of PhD candidates from various institutions: </p>
      </div>


      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div>
            <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
              tabIndex={0} // <-- permite focus en móvil
            >
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="./members/anjboe.jpg"
                alt="Photo of Anja Boekholt"
              />
              {/* <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"> */}

              {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Anja Boekholt
                </p>
                <p className="mb-2 text-xs text-gray-100"> Barcelona Centre of Subsurface Imaging.</p>
                <p className="mb-4 text-sm text-gray-100"> ICM - CSIC  </p>
                <p className="mb-4 text-xs tracking-wide text-gray-400"> Marine Geosciences, Geophysics and Geohazards </p>

                <div className="flex items-center justify-center space-x-3">
                  <a href="/" className="text-white transition-colors duration-300
                      hover:text-teal-400 focus:text-teal-400 active:text-teal-400">
                    {/* Twitter placeholder; cambia por tu SVG de Bluesky/LinkedIn */}

                    <svg
                      viewBox="0 0 600 600"
                      fill="currentColor"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Bluesky"
                    >
                      <g transform="rotate(180, 300, 300)">

                        <path d="M300 140c50-60 150-110 200-110-20 80-40 130-20 200s70 130 90 180c20 60-20 120-100 40-60-60-130-140-170-140s-110 80-170 140c-80 80-120 20-100-40 20-50 70-110 90-180s0-120-20-200c50 0 150 50 200 110z" />
                      </g>
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-label="LinkedIn"
                    >
                      <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                            2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                            5-5v-14c0-2.77-2.23-5-5-5zm-11.75 
                            20h-3v-11h3v11zm-1.5-12.27c-.96 
                            0-1.73-.79-1.73-1.77s.78-1.77 
                            1.73-1.77 1.73.79 
                            1.73 1.77-.77 1.77-1.73 
                            1.77zm13.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                            0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 
                            1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 
                            3.58 4.58v6.47z"/>
                    </svg>

                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
            tabIndex={0} // <-- permite focus en móvil
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="./members/maroli.jpg"
              alt="Photo of Marco Oliva-Gutierrez"
            />

            {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
              <p className="mb-1 text-lg font-bold text-gray-100">Marco Oliva Gutierrez</p>
              <p className="mb-2 text-xs text-gray-100">Geodynamics and Basin Analysis Group.</p>
              <p className="mb-4 text-sm text-gray-100">Geomodels Research Institute</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                Computational Modeling of Geothermal Systems and Data Integration
              </p>

              <div className="flex items-center justify-center space-x-3">
                <a href="https://bsky.app/profile/ogmdevlab.bsky.social" className="text-white transition-colors duration-300
                      hover:text-teal-400 focus:text-teal-400 active:text-teal-400">
                  {/* Twitter placeholder; cambia por tu SVG de Bluesky/LinkedIn */}
                  <svg
                    viewBox="0 0 600 600"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Bluesky"
                  >
                    <g transform="rotate(180, 300, 300)">

                      <path d="M300 140c50-60 150-110 200-110-20 80-40 130-20 200s70 130 90 180c20 60-20 120-100 40-60-60-130-140-170-140s-110 80-170 140c-80 80-120 20-100-40 20-50 70-110 90-180s0-120-20-200c50 0 150 50 200 110z" />
                    </g>
                  </svg>

                </a>
                <a href="https://www.linkedin.com/in/marco-oliva-gutierrez/" className="text-white transition-colors duration-300 hover:text-teal-400 focus:text-teal-400 active:text-teal-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-label="LinkedIn"
                  >
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                            2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                            5-5v-14c0-2.77-2.23-5-5-5zm-11.75 
                            20h-3v-11h3v11zm-1.5-12.27c-.96 
                            0-1.73-.79-1.73-1.77s.78-1.77 
                            1.73-1.77 1.73.79 
                            1.73 1.77-.77 1.77-1.73 
                            1.77zm13.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                            0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 
                            1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 
                            3.58 4.58v6.47z"/>
                  </svg>


                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
            tabIndex={0} // <-- permite focus en móvil
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="./members/lauaco.jpg "
              alt="Photo of Laura Camila Acosta"
            />
            {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
              <p className="mb-1 text-lg font-bold text-gray-100"> Laura Camila Acosta </p>
              <p className="mb-4 text-xs text-gray-100"> Sedimentary Geology Group </p>
              <p className="mb-4 text-sm text-gray-100"> University of Barcelona </p>
              <p className="mb-4 text-xs tracking-wide text-gray-400"> Micropaleontology, stratigraphy and basin analysis </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.researchgate.net/profile/Laura-Acosta-Fernandez?ev=hdr_xprf"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    viewBox="0 0 600 600"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Bluesky"
                  >
                    <g transform="rotate(180, 300, 300)">

                      <path d="M300 140c50-60 150-110 200-110-20 80-40 130-20 200s70 130 90 180c20 60-20 120-100 40-60-60-130-140-170-140s-110 80-170 140c-80 80-120 20-100-40 20-50 70-110 90-180s0-120-20-200c50 0 150 50 200 110z" />
                    </g>
                  </svg>

                </a>
                <a
                  href="https://www.linkedin.com/in/laura-camila-acosta-742399235/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-label="LinkedIn"
                  >
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                            2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                            5-5v-14c0-2.77-2.23-5-5-5zm-11.75 
                            20h-3v-11h3v11zm-1.5-12.27c-.96 
                            0-1.73-.79-1.73-1.77s.78-1.77 
                            1.73-1.77 1.73.79 
                            1.73 1.77-.77 1.77-1.73 
                            1.77zm13.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                            0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 
                            1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 
                            3.58 4.58v6.47z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
            tabIndex={0} // <-- permite focus en móvil
          >

            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="./members/marbri.jpg"
              alt="Photo of Marine Briones"
            />
            {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
              <p className="mb-1 text-lg font-bold text-gray-100">
                Marina Briones
              </p>
              <p className="mb-2 text-xs text-gray-100">Marine Biogeochemistry and Oceanography Group</p>
              <p className="mb-4 text-sm text-gray-100"> ICM - CSIC </p>
              <p className="mb-4 text-xs tracking-wide text-gray-400"> Marine Ecology </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href=" "
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    viewBox="0 0 600 600"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Bluesky"
                  >
                    <g transform="rotate(180, 300, 300)">

                      <path d="M300 140c50-60 150-110 200-110-20 80-40 130-20 200s70 130 90 180c20 60-20 120-100 40-60-60-130-140-170-140s-110 80-170 140c-80 80-120 20-100-40 20-50 70-110 90-180s0-120-20-200c50 0 150 50 200 110z" />
                    </g>
                  </svg>
                </a>
                <a
                  href=" "
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-label="LinkedIn"
                  >
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                            2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                            5-5v-14c0-2.77-2.23-5-5-5zm-11.75 
                            20h-3v-11h3v11zm-1.5-12.27c-.96 
                            0-1.73-.79-1.73-1.77s.78-1.77 
                            1.73-1.77 1.73.79 
                            1.73 1.77-.77 1.77-1.73 
                            1.77zm13.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                            0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 
                            1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 
                            3.58 4.58v6.47z"/>
                  </svg>


                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 
            lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
            tabIndex={0} // <-- permite focus en móvil
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="./members/saresp.jpg"
              alt="Photo of Sara Espinosa"
            />
            {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
              <p className="mb-1 text-lg font-bold text-gray-100">  Sara Espinosa </p>
              <p className="mb-4 text-xs text-gray-100"> Department of Earth and Ocean Dynamics </p>
              <p className="mb-4 text-xs text-gray-100"> University of Barcelona </p>
              <p className="mb-4 text-xs tracking-wide text-gray-400"> Marine geosciences/ Chemical oceanography </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >

                  <svg
                    viewBox="0 0 600 600"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Bluesky"
                  >
                    <g transform="rotate(180, 300, 300)">

                      <path d="M300 140c50-60 150-110 200-110-20 80-40 130-20 200s70 130 90 180c20 60-20 120-100 40-60-60-130-140-170-140s-110 80-170 140c-80 80-120 20-100-40 20-50 70-110 90-180s0-120-20-200c50 0 150 50 200 110z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sara-espinosa-paz-38200b24b/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-label="LinkedIn"
                  >
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                            2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                            5-5v-14c0-2.77-2.23-5-5-5zm-11.75 
                            20h-3v-11h3v11zm-1.5-12.27c-.96 
                            0-1.73-.79-1.73-1.77s.78-1.77 
                            1.73-1.77 1.73.79 
                            1.73 1.77-.77 1.77-1.73 
                            1.77zm13.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                            0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 
                            1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 
                            3.58 4.58v6.47z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 
            lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
            tabIndex={0} // <-- permite focus en móvil
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="./members/gusken.jpg"
              alt="Photo of Gustavo Kenji Lacerda Orita"
            />
            {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
              <p className="mb-1 text-lg font-bold text-gray-100"> Gustavo Kenji Lacerda Orita      </p>
              <p className="mb-2 text-xs text-gray-100"> Department of Mineralogy, Perology and Applied Geology </p>
              <p className="mb-4 text-sm text-gray-100"> University of Barcelona </p>
              <p className="mb-4 text-xs tracking-wide text-gray-400"> Sedimentology, Stratigraphy and Basin Analysis </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="https://www.researchgate.net/profile/Gustavo-Kenji-Lacerda-Orita?ev=hdr_xprf"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >

                  <svg
                    viewBox="0 0 600 600"
                    fill="currentColor"
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Bluesky"
                  >
                    <g transform="rotate(180, 300, 300)">

                      <path d="M300 140c50-60 150-110 200-110-20 80-40 130-20 200s70 130 90 180c20 60-20 120-100 40-60-60-130-140-170-140s-110 80-170 140c-80 80-120 20-100-40 20-50 70-110 90-180s0-120-20-200c50 0 150 50 200 110z" />
                    </g>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/lacerdaorita/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-label="LinkedIn"
                  >
                    <path d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                            2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                            5-5v-14c0-2.77-2.23-5-5-5zm-11.75 
                            20h-3v-11h3v11zm-1.5-12.27c-.96 
                            0-1.73-.79-1.73-1.77s.78-1.77 
                            1.73-1.77 1.73.79 
                            1.73 1.77-.77 1.77-1.73 
                            1.77zm13.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                            0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.88v1.5h.04c.4-.76 
                            1.37-1.55 2.82-1.55 3.02 0 3.58 1.99 
                            3.58 4.58v6.47z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div className="group relative overflow-hidden rounded shadow-lg transition duration-300 
            lg:hover:-translate-y-2 hover:shadow-2xl focus:outline-none"
            tabIndex={0} // <-- permite focus en móvil
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="./members/irella.jpg"
              alt="Photo of Irene Llamos Cano"
            />


            {/* Overlay: oculto por defecto; aparece con hover (desktop) o focus (móvil) */}
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center
                bg-black/80 opacity-0 transition-opacity duration-300 pointer-events-none 
                  group-hover:opacity-100 group-focus:opacity-100 group-hover:pointer-events-auto
                  group-focus:pointer-events-auto  " >
              <p className="mb-1 text-lg font-bold text-gray-100"> Irene Llamas           </p>
              <p className="mb-2 text-xs text-gray-100"> Department of Earth and Ocean Dynamics </p>
              <p className="mb-4 text-sm text-gray-100"> University of Barcelona</p>
              <p className="mb-4 text-xs tracking-wide text-gray-400"> Biogeochemistry  </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                </a>
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>








    </div>
  );
};


export default Team
//
//
// import React from "react";












// const Team = () => {
//   return (
//     <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
//       <div className="container mx-auto">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="mx-auto mb-[60px] max-w-[510px] text-center">
//               <span className="mb-2 block text-lg font-semibold text-primary">
//                 Our Team
//               </span>
//               <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
//                 Our Awesome Team
//               </h2>
//               <p className="text-base text-body-color ">
//                 There are many variations of passages of Lorem Ipsum available
//                 but the majority have suffered alteration in some form.
//               </p>
//             </div>
//           </div>
//         </div>
//
//         <div className="-mx-4 gap-10 flex flex-wrap justify-center">
//           <TeamCard
//             name="Coriss Ambady"
//             profession="Web Developer"
//             imageSrc="../../public/members/IreneLlamas.jpg"
//           />
//           <TeamCard
//             name="Corisdddsddy"
//             profession="Web Developer"
//             imageSrc="../../public/members/IreneLlamas.jpg"
//           />
//           <TeamCard
//             name="Coriss Ambady"
//             profession="Web Developer"
//             imageSrc="../../public/members/IreneLlamas.jpg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Team;
//
// const TeamCard = ({ imageSrc, name, profession }) => {
//   return (
//     <>
//       <div className="w-full px-
//         4 md:w-1/2 xl:w-1/4">
//         <div className="mx-auto mb-10 w-full max-w-[370px]">
//           <div className="relative overflow-hidden rounded-lg">
//             <img src={imageSrc} alt="" className="w-full" />
//             <div className="absolute bottom-5 left-0 w-full text-center">
//               <div className="relative mx-5 overflow-hidden rounded-lg bg-earth2-azulos px-3 py-5 ">
//                 <h3 className="text-base font-semibold text-dark ">
//                   {name}
//                 </h3>
//                 <p className="text-xs text-body-color ">
//                   {profession}
//                 </p>
//                 <div>
//                   <span className="absolute bottom-0 left-0">
//                     <svg
//                       width={61}
//                       height={30}
//                       viewBox="0 0 61 30"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx={16}
//                         cy={45}
//                         r={45}
//                         fill="#13C296"
//                         fillOpacity="0.11"
//                       />
//                     </svg>
//                   </span>
//                   <span className="absolute right-0 top-0">
//                     <svg
//                       width={20}
//                       height={25}
//                       viewBox="0 0 20 25"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         cx="0.706257"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="24.3533"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 24.3533)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="18.6624"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 18.6624)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="12.9717"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 12.9717)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="7.28077"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 7.28077)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="0.706257"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 0.706257 1.58989)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="6.39669"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 6.39669 1.58989)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="12.0881"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 12.0881 1.58989)"
//                         fill="#3056D3"
//                       />
//                       <circle
//                         cx="17.7785"
//                         cy="1.58989"
//                         r="0.646687"
//                         transform="rotate(-90 17.7785 1.58989)"
//                         fill="#3056D3"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


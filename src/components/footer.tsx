

type FooterProps = {
  setActiveSection: (section: string) => void;
};

export default function Footer({ setActiveSection }: FooterProps) {
  return (
    <div className="relative mt-16 bg-deep-purple-accent-400">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-earth-secondary"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">

        <div className=" grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
          {/* <div className="md:max-w-md lg:col-span-2 flex flex-col sm:flex-row sm:items-start"> */}
          <div className=" lg:col-span-3 flex flex-col sm:flex-row sm:items-start">
            {/* <div className="mt-4 sm:mt-0 sm:ml-4 flex-1 flex flex-col justify-center text-center sm:text-left"> */}



            {/* Enlace SOLO en el logo */}
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="mx-auto lg:mx-0 flex-shrink-0"
            >
              <img
                className="w-38 h-auto md:w-48 "
                src="/geomare-speeches/img/Logo.png"
                alt="Organization of the Marine Biodiversity and Evolution Department"
              />
            </a>

            {/* Bloque de texto */}
            <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col justify-center text-center sm:text-left">
              <span className="text-xl font-bold tracking-wide text-gray-100 uppercase">
                GeoMare Speeches
              </span>
              <p className="mt-2 text-sm lg:mr-8 text-earth-poster1">
                Predoctoral researchers are modern-day explorers, navigating the vast ocean of knowledge in pursuit of uncharted land.
              </p>
              <p className="mt-2 text-sm text-earth-poster1">
                Advancing science in the service of humanity
              </p>
            </div>
          </div>





          {/* <div className="max-w-[70%] grid grid-cols-3 sm:gap-5 md:gap-15 row-gap-8 lg:col-span-3 md:grid-cols-3"> */}
          <div className="md:max-w-[85%] grid grid-cols-3 sm:gap-5 md:gap-15 row-gap-8 lg:col-span-2 md:grid-cols-3">

            <div className="md:ml-auto ">
              <p className="font-bold tracking-wide text-teal-accent-400">
                Geomare
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  {/* <a */}
                  {/*   href="home" */}
                  {/*   className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
                  {/* > */}
                  {/*   Home */}
                  {/* </a> */}
                  <button
                    onClick={() => setActiveSection("home")}
                    className=" py-0 transition-colors duration-300 text-earth-poster1 hover:cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  {/* <a */}
                  {/*   href="#about" */}
                  {/*   className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
                  {/* > */}
                  <button
                    onClick={() => {
                      setActiveSection("about")
                      // window.location.hash = "#about";
                    }}

                    className="transition-colors duration-300 text-earth-poster1 hover:cursor-pointer hover:text-blue-50"
                  >
                    About
                  </button>
                  {/* </a> */}
                </li>
                <li>
                  {/* <a */}
                  {/*   href="abstract" */}
                  {/*   className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
                  {/* > */}
                  {/*   Abstract */}
                  {/* </a> */}
                  <button
                    onClick={() => {
                      setActiveSection("abstracts")
                      // window.location.hash = "#abstracts";
                    }}

                    className="transition-colors duration-300 text-earth-poster1 hover:cursor-pointer hover:text-blue-50"
                  >
                    Abstract
                  </button>

                </li>
                <li>
                  {/* <a */}
                  {/*   href="Schedule" */}
                  {/*   className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
                  {/* > */}
                  {/*   Schedule */}
                  {/* </a> */}
                  <button
                    onClick={() => {
                      setActiveSection("schedule")
                      window.location.hash = "#schedule";
                    }}

                    className="transition-colors duration-300 text-earth-poster1 hover:cursor-pointer hover:text-blue-50"
                  >
                    Schedule
                  </button>

                </li>
              </ul>
            </div>
            <div className="md:ml-auto lg:ml-0">
              <p className=" font-bold tracking-wide text-teal-accent-400">
                The UB
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://web.ub.edu/en/legal-notice"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                    Legal notice
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://web.ub.edu/en/accessibility"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                   Accesability 
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://web.ub.edu/en/cookie-policy"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-auto sm:ml-0">
              <p className="font-bold tracking-wide text-teal-accent-400">
                Institutions
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.ub.edu/portal/web/ciencies-terra/inici"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                    The Faculty
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.ub.edu/geomodels/Home_en.html"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                    Geomodels
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.geo3bcn.csic.es/"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                    Geo3Bcn
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.icm.csic.es/en"
                    className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
                  >
                    ICM
                  </a>
                </li>
              </ul>
            </div>
            {/* <div> */}
            {/*   <p className="font-semibold tracking-wide text-teal-accent-400"> */}
            {/*     Business */}
            {/*   </p> */}
            {/*   <ul className="mt-2 space-y-2"> */}
            {/*     <li> */}
            {/*       <a */}
            {/*         href="/" */}
            {/*         className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
            {/*       > */}
            {/*         Infopreneur */}
            {/*       </a> */}
            {/*     </li> */}
            {/*     <li> */}
            {/*       <a */}
            {/*         href="/" */}
            {/*         className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
            {/*       > */}
            {/*         Personal */}
            {/*       </a> */}
            {/*     </li> */}
            {/*     <li> */}
            {/*       <a */}
            {/*         href="/" */}
            {/*         className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
            {/*       > */}
            {/*         Wiki */}
            {/*       </a> */}
            {/*     </li> */}
            {/*     <li> */}
            {/*       <a */}
            {/*         href="/" */}
            {/*         className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
            {/*       > */}
            {/*         Forum */}
            {/*       </a> */}
            {/*     </li> */}
            {/*   </ul> */}
            {/* </div> */}
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-earth-poster1 sm:flex-row">
          <p className="text-sm text-gray-100">
            Developed by <a href="https://github.com/molivag"
              // className="underline underline-offset-2 hover:text-red-500">
              className="underline mr-1 text-cyan-300 underline-offset-2 hover:text-red-500 focus:text-red-500 active:text-red-500">

              ogmdevlab
            </a>
            © Copyright 2025.
          </p>
          <p className="text-sm text-gray-100">All rights reserved  </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://bsky.app/profile/cienciesterraub.bsky.social/post/3lpqkjk6pg22k"
              className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
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
              href="https://es.linkedin.com/in/geologiaub"
              className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400"
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



              {/* <svg viewBox="0 0 30 30" fill="currentColor" className="h-6"> */}
              {/*   <circle cx="15" cy="15" r="4" /> */}
              {/*   <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" /> */}
              {/* </svg> */}
            </a>
            {/* <a */}
            {/*   href=" " */}
            {/*   className="transition-colors duration-300 text-earth-poster1 hover:text-teal-accent-400" */}
            {/* > */}
            {/*   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5"> */}
            {/*     <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" /> */}
            {/*   </svg> */}
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

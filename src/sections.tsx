import Home from "./components/HomePage"
import About from "./components/AboutCongress"
import Schedule from "./components/GeneralSchedule"
import Abstracts from "./components/AbstractSubmission";
import Entities from "./components/ParticipatingEntities"
// ajusta la ruta según dónde esté tu archivo

export const sections = [
  {
    id: 'home', label: 'Home',
    component: <Home />
  },
  {
    id: 'about', label: 'About the Conference',
    component: <About />
  },
  {
    id: 'abstracts', label: 'Abstract Submission',
    component: <Abstracts />
  },
  {
    id: 'schedule', label: 'Schedule',
    component: <Schedule />
  },
  {
    id: 'sponsors', label: 'Institutions Participating',
    component: <Entities />
  },
];


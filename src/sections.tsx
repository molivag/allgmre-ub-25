import Home from "./components/HomePage"
import About from "./components/AboutCongress"
import Schedule from "./components/GeneralSchedule"
import Abstracts from "./components/AbstractSubmission";
// ajusta la ruta según dónde esté tu archivo

export const sections = [
  {
    id: 'home', label: 'Home',
    component: <Home />
  },
  {
    id: 'about', label: 'About',
    component: <About />
  },
  {
    id: 'abstracts', label: 'Abstract',
    component: <Abstracts />
  },
  {
    id: 'schedule', label: 'Schedule',
    component: <Schedule />
  },
];


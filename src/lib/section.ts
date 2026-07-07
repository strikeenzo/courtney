import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export type SectionName =
  | 'Home'
  | 'About'
  | 'Projects'
  | 'Contact';

export const sectionComponents = {
  Home: Home,
  About: About,
  Projects: Projects,
  Contact: Contact,
}

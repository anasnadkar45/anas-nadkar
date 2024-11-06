import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <TechStack />
      <Contact />
    </>
  );
}

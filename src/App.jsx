import "./styles/research.css";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import RoastLab from "./sections/RoastLab";


import {
  LabOverview,
  CollectionSection,
  ProcessSection,
  LabNotesSection,
  SiteFooter,
} from "./sections/ResearchSections";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <LabOverview />

        <RoastLab />

        <CollectionSection />

        <ProcessSection />

        <LabNotesSection />

        <SiteFooter />
      </main>
    </>
  );
}

export default App;
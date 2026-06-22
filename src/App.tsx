import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/screens/Homepage";
import AboutMe from "./components/screens/AboutMe";
import FeaturedProjects from "./components/screens/FeaturedProjects";
import Skills from "./components/screens/Skills";
import Footer from "./components/screens/Footer";
import Projects from "./components/screens/Projects";
import FAQ from "./components/screens/FAQ";
import PageGlow from "./components/decorations/PageGlow";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PageGlow>
              <Homepage />
              <AboutMe />
              <FeaturedProjects />
              <Skills />
              <FAQ />
            </PageGlow>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

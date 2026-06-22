import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/screens/Homepage";
import AboutMe from "./components/screens/AboutMe";
import FeaturedProjects from "./components/screens/FeaturedProjects";
import Skills from "./components/screens/Skills";
import Footer from "./components/screens/Footer";
import Projects from "./components/screens/Projects";
import FAQ from "./components/screens/FAQ";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden">
              <Homepage />
              <AboutMe />
              <FeaturedProjects />
              <Skills />
              <FAQ />
            </div>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

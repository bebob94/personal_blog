import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Gallery from "./scenes/Gallery";
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [language, setLanguage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-orange-600">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        language={language}
        setLanguage={setLanguage}
      />
      <div className="w-5/6 mx-auto md:h-full mb-10">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            language={language}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} language={language} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-96">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <MySkills language={language} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects language={language} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-96">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("gallery")}
        >
          <Gallery language={language} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-10">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact language={language} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;

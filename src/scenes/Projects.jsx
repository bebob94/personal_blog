import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95  transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair ">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className="border-white border-2  w-[420px] max-h-[400px]"
      />
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "M.V.S.sport",
      description: `Sito sportivo che permette di prenotare campi ed aggiungersi a prenotazioni di altri utenti.  Progetto creato in java e react Typescript.`,
      link: "https://github.com/bebob94/MVS_Sports",
    },
    {
      title: "Linkedin Clone",
      description: `Clone del noto sito Linkedin con tutte le sezioni home, profilo, ricerca lavoro e la possibilità di inserire post, commenti e like.  Progetto frontend creato con react typescript.`,
      link: "https://github.com/lucaf1990/Linkedin",
    },
    {
      title: "Spotify Clone",
      description: `Clone del noto sito Spotify con la possibilità di ricercare le canzoni per genere autore o titolo e salvarle nei preferiti. Progetto frontend creato con Javascript.`,
      link: "https://github.com/lucaf1990/SPOTIFY-BuildWeek",
    },
    {
      title: "Netflix Clone",
      description: `Clone del noto sito Netflix, con la possibilità di ricercare i film per autore e titolo. Primo progetto frontend creato con React.`,
      link: "https://github.com/bebob94/Netflix-Clone",
    },
    {
      title: "App Meteo",
      description: `Applicazione meteo che permette di vedere le condizioni atmosferiche della località che si preferisce. Progetto frontend creato con React.`,
      link: "https://github.com/bebob94/app-Meteo",
    },
    {
      title: "Epicode clone",
      description: `Clone del sito Epicode, in cui si può svolgere un quiz a risposta multipla, con la possibilità di vedere i risultati.  Primo progetto svolto interamente in javascrpt.`,
      link: "",
    },
    {
      title: "GitHub",
      description: "Statistiche Giugno 2023 GitHub",

      link: "https://github.com/bebob94",
    },
  ];
  return (
    <section id="projects" className="pt-32 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ root: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-6 mb-10">
          In the "Projects" section of my blog, I share a variety of projects
          that I have created and developed. This section offers you an
          opportunity to explore my creations, experiments, and passions in the
          field of web development. You will be able to get an idea of my skills
          and experiences, and I hope they can inspire you for your future
          projects.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10  border-white border-2 bg-red
              max-w-[420px] max-h-[415px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          {projectData.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
          {/* ROW 3 */}

          <div
            className="flex justify-center border-white border-2 text-center items-center p-10 bg-blue
              max-w-[420px] max-h-[420px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

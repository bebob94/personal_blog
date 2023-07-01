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
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "M.V.S.sport",
      description: "Descrizione del progetto M.V.S.sport",
    },
    {
      title: "Linkedin Clone",
      description: "Descrizione del progetto Linkedin Clone",
    },
    {
      title: "Spotify Clone",
      description: "Descrizione del progetto Spotify Clone",
    },
    {
      title: "Netflix Clone",
      description: "Descrizione del progetto Netflix Clone",
    },
    {
      title: "App Meteo",
      description: "Descrizione del progetto App Meteo",
    },
    {
      title: "Epicode clone",
      description: "Descrizione del progetto Epicode clone",
    },
    {
      title: "GitHub",
      description: "Descrizione del progetto GitHub",
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
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[420px] max-h-[400px] text-2xl font-playfair font-semibold"
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
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

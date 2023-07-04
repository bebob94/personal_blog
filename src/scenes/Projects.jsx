import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import image1 from "../../public/assets/M.V.S.sport.png";
import image2 from "../../public/assets/Linkedin-Clone.png";
import image3 from "../../public/assets/Spotify-Clone.png";
import image4 from "../../public/assets/Netflix-Clone.png";
import image5 from "../../public/assets/App-Meteo.png";
import image6 from "../../public/assets/Epicode-clone.png";
import image7 from "../../public/assets/GitHub.png";

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

const Project = ({ title, description, link, image, language }) => {
  const overlayStyles = `absolute xs:h-full sm:h-4/5 w-full p-2 opacity-0 hover:opacity-100 rounded-2xl transition duration-500 
    bg-grey z-30 flex flex-col justify-center items-center text-center  text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair ">{title}</p>
        <p className="mt-3 xs:text-xs font-serif">{description}</p>
        <a
          href={link}
          className="font-playfair text-deep-blue rounded-full mt-3 font-semibold
              hover:bg-blue hover:text-white transition duration-500 md:text-xl xs:text- px-4 bg-red"
        >
          {" "}
          {language === true ? "View on GitHub" : "Vedi su GitHub"}
        </a>
      </div>
      <img
        src={image}
        alt={projectTitle}
        className="border-white border-2  rounded-2xl   w-full h-4/5"
      />
    </motion.div>
  );
};

const Projects = ({ language }) => {
  const projectData = [
    {
      title: "M.V.S.sport",
      description1:
        "Sports website that allows you to book fields and join other users' reservations. Project created in Java and React Typescript.",
      description2:
        "Sito sportivo che permette di prenotare campi ed aggiungersi a prenotazioni di altri utenti. Progetto creato in java e react Typescript.",
      link: "https://github.com/bebob94/MVS_Sports",
      image: { image1 },
    },
    {
      title: "Linkedin Clone",
      description1:
        "Clone of the popular site Linkedin with all the sections home, profile, job search, and the ability to post, comment, and like. Frontend project created with React TypeScript.",
      description2:
        "Clone del noto sito Linkedin con tutte le sezioni home, profilo, ricerca lavoro e la possibilità di inserire post, commenti e like.  Progetto frontend creato con react typescript.",
      link: "https://github.com/lucaf1990/Linkedin",
      image: { image2 },
    },
    {
      title: "Spotify Clone",
      description1:
        "Clone of the popular site Spotify with the ability to search for songs by genre, artist, or title and save them as favorites. Frontend project created with JavaScript.",
      description2:
        "Clone del noto sito Spotify con la possibilità di ricercare le canzoni per genere autore o titolo e salvarle nei preferiti. Progetto frontend creato con Javascript.",
      link: "https://github.com/lucaf1990/SPOTIFY-BuildWeek",
      image: { image3 },
    },
    {
      title: "Netflix Clone",
      description1:
        "Clone of the popular site Netflix, with the ability to search for movies by artist and title. First frontend project created with React.",
      description2:
        "Clone del noto sito Netflix, con la possibilità di ricercare i film per autore e titolo. Primo progetto frontend creato con React.",
      link: "https://github.com/bebob94/Netflix-Clone",
      image: { image4 },
    },
    {
      title: "App Meteo",
      description1:
        "Weather application that allows you to see the atmospheric conditions of the preferred location. Frontend project created with React.",
      description2:
        "Applicazione meteo che permette di vedere le condizioni atmosferiche della località che si preferisce. Progetto frontend creato con React.",
      link: "https://github.com/bebob94/app-Meteo",
      image: { image5 },
    },
    {
      title: "Epicode clone",
      description1:
        "Clone of the Epicode website, where you can take a multiple-choice quiz with the ability to view the results. First project developed entirely in JavaScript.",
      description2:
        "Clone del sito Epicode, in cui si può svolgere un quiz a risposta multipla, con la possibilità di vedere i risultati.  Primo progetto svolto interamente in javascrpt.",
      link: "https://github.com/bebob94/Epicode-quiz",
      image: { image6 },
    },
    {
      title: "GitHub",
      description1: "GitHub June 2023 Statistics",
      description2: "Statistiche Giugno 2023 GitHub",
      image: { image7 },
    },
  ];
  return (
    <section
      id={language === true ? "projects" : "progetti"}
      className="pt-24 pb-10"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-3/5 mx-auto text-center"
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
            <span className="text-red">PRO</span>
            {language === true ? "JECTS" : "GETTI"}
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-6 mb-10 font-serif">
          {language === true
            ? "In the 'Projects' section of my blog, I share a variety of projects that I have created and developed. This section offers you an opportunity to explore my creations, experiments, and passions in the field of web development. You will be able to get an idea of my skills and experiences, and I hope they can inspire you for your future projects."
            : "Nella sezione 'Progetti' del mio blog, condivido una varietà di progetti che ho creato e sviluppato. Questa sezione ti offre l'opportunità di esplorare le mie creazioni, gli esperimenti e le passioni nel campo dello sviluppo web. Sarai in grado di avere un'idea delle mie competenze ed esperienze e spero che possano ispirarti per i tuoi progetti futuri."}
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center xs:h-72 p-10 rounded-2xl border-white border-2 bg-red
            w-full sm:h-4/5 text-2xl font-playfair font-semibold"
          >
            {language === true
              ? "BEAUTIFUL USER INTERFACES"
              : " BELLE INTERFACCE UTENTE"}
          </div>

          {projectData.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              language={language}
              description={
                language === true ? project.description1 : project.description2
              }
              link={project.link}
              image={project.image}
            />
          ))}
          {/* ROW 3 */}

          <div
            className="flex justify-center rounded-2xl border-white xs:h-72 border-2 text-center items-center p-10 bg-blue
            w-full sm:h-4/5 text-2xl font-playfair font-semibold"
          >
            {language === true
              ? "SMOOTH USER EXPERIENCE"
              : "ESPERIENZA UTENTE FLUIDA"}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

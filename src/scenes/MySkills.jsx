import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-24">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ root: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-3">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <h3 className="font-opensans font-semibold text-2xl mt-4">
            Frontend:
          </h3>
          <p className=" mb-2 text-1xl">
            Html, Css, Sass, Javascript, React, Redux, Router-Dom, Persist,
            TypeScript, Bootstrap, Tailwind, Axios.
          </p>
          <h3 className="font-opensans font-semibold text-2xl mt-4">
            Backend:
          </h3>
          <p className=" mb-2 text-1xl">
            Java, PostgreSQL, Maven, JJWT, Lombok, Jpa, SpringBoot, Spring data,
            Spring Security, Spring Web.
          </p>
          <h3 className="font-opensans font-semibold text-2xl mt-4">
            General:
          </h3>
          <p className=" text-1xl">
            GitHub, Git, Postman, Discord, Visual Studio Code, Trello, Agile &
            Scrum.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 hover:-translate-x-10 hover:-translate-y-10  transition duration-500"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10 " src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-6 gap-32">
        {/* Description */}
        <motion.div
          className="md:w-1/3 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ root: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Description
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 mb-2">
            Hello everyone!🙋🏻‍♂️ My name is Alberto Macis, i am a young man with
            extensive experience in various sales-related fields🤝🏻, customer
            relationship management, and direct customer assistance🆘.
            Currently, I am expanding my skills in FullStack Web Development.👨🏻‍💻
            I constantly strive to improve my skills, keeping up with the latest
            industry trends.
          </p>
          <div className="flex justify-center items-center">
            <a
              className="bg-gradient-rainblue text-deep-blue rounded-full px-3 py-1 mt-1 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
              href="../../public/Alberto_Macis_-_Junior_Web_Developer_Fullstack (19).pdf"
              download
            >
              {" "}
              {" -> Curriculum <- "}{" "}
            </a>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ root: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 mb-2">
            On June 2023 I completed an intensive 950-hour course with
            Epicode👨🏻‍💻, where I learned to develop front-end and back-end web
            applications and use the latest technologies.📲 I have had the
            opportunity to work on multiple projects, individually and with
            others people, that have allowed me to apply the skills I have
            acquired in a real development environment.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-gradient-rainblue text-deep-blue rounded-full font-semibold
              hover:bg-blue hover:text-white transition duration-500 px-3 py-1 mt-1"
              href="https://benchmark.epicode.com/credentials/64872a2fcaff90a796586293"
            >
              {" "}
              {" -> Certificate <- "}{" "}
            </a>
          </div>
        </motion.div>
        {/* HOBBIES */}
        <motion.div
          className="md:w-1/3 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ root: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Hobbies
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-violet-900 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 mb-2">
            My involvement in professional football⚽ has taught me the
            importance of a united team focused on a common goal. I have learned
            that open communication, mutual trust, and determination are
            essential for collective success.🎯 As a captain, I have developed
            leadership skills, a strategic vision, and the ability to motivate
            others to give their best.🥋
          </p>
          <div className="flex justify-center items-center">
            <a
              className="bg-gradient-rainblue text-deep-blue rounded-full font-semibold 
              hover:bg-blue hover:text-white transition duration-500 px-3 py-1 mt-1"
              href=" https://www.instagram.com/p/BzX4sfGICI1/"
            >
              {" "}
              {" -> Photo <- "}{" "}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

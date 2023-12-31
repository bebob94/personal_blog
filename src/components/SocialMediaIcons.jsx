import GitHub from "../assets/icons8-github-50 (1).png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/alberto-macis-052273153/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50  transition duration-500"
        href="https://github.com/bebob94"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="GitHub-link" src={GitHub} className="h-10 pb-2 " />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

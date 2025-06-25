import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Dipanjali Sahoo, a full-stack web developer with 1 year of experience building dynamic, scalable web applications. I specialize in front-end development with React and back-end development using Node.js and Express, creating seamless user experiences backed by robust, efficient server-side logic. I'm passionate about clean code, continuous learning, and mentoring aspiring developers to grow in tech. Whether it's crafting intuitive interfaces or architecting APIs, I thrive on turning ideas into impact—one line of code at a time.
      </p>
      <button className="border border-cyan rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

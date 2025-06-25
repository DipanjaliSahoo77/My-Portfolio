import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Fitness Business Website",
    year: "Mar2025",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://fitclubny.com/",
  },
  {
    name: "Fashion eCommerce Website",
    year: "Sept2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://www.asos.com/",
  },
  {
    name: "Dental Clinic Website ",
    year: "Jan2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://www.smiledentalclinics.com/",
  },
  {
    name: "Legal Services Directory Platform",
    year: "May2023",
    align: "left",
    image: "/images/website-img-4.jpg",
    link: "https://www.lawyerland.com/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            name={project.name}
            year={project.year}
            align={project.align}
            image={project.image}
            link={project.link} // <-- Fix here
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
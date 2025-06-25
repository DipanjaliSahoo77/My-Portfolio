import { motion } from "framer-motion";

const phrases = ["Fast Learner", "Team Work", "Details Master"];

const SubHeroMain = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="w-full max-w-[800px] mx-auto backdrop-blur-xl bg-white/10 border-y border-white/20 text-white flex justify-around uppercase xl:text-2xl md:text-xl sm:text-2xl py-4 px-4 md:flex-row sm:flex-col items-center gap-4 shadow-xl rounded-xl"
>
  {phrases.map((text, index) => (
    <motion.p
      key={index}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: [10, -10, 10], opacity: 1 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.3,
        ease: "easeInOut",
      }}
      className="hover:scale-110 transition-transform duration-300"
    >
      {text}
    </motion.p>
  ))}
</motion.div>

  );
};

export default SubHeroMain;

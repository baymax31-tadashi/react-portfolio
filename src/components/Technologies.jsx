import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{ opacity:0 , y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl font-semibold">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{ opacity:0 , x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-8">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-110 hover:border-cyan-400 transition-all">
          <RiReactjsLine className="text-7xl text-cyan-400" aria-label="React" />
          <p className="mt-4 text-lg text-neutral-300">React</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-110 hover:border-cyan-400 transition-all">
          <TbBrandNextjs className="text-7xl text-cyan-400" aria-label="Next.js" />
          <p className="mt-4 text-lg text-neutral-300">Next.js</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-110 hover:border-cyan-400 transition-all">
          <SiMongodb className="text-7xl text-green-500" aria-label="MongoDB" />
          <p className="mt-4 text-lg text-neutral-300">MongoDB</p>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-110 hover:border-cyan-400 transition-all">
          <DiRedis className="text-7xl text-red-700" aria-label="Redis" />
          <p className="mt-4 text-lg text-neutral-300">Redis</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-110 hover:border-cyan-400 transition-all">
          <FaNodeJs className="text-7xl text-green-500" aria-label="Node.js" />
          <p className="mt-4 text-lg text-neutral-300">Node.js</p>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-110 hover:border-cyan-400 transition-all">
          <BiLogoPostgresql className="text-7xl text-sky-700" aria-label="PostgreSQL" />
          <p className="mt-4 text-lg text-neutral-300">PostgreSQL</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react"
import { MdDisabledVisible } from "react-icons/md";

const container= (delay) => ({
  hidden: {x: -100, opacity:0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: delay}

  }
})




const Hero = () => {
    return (
      <section className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                Kevin Rush
              </motion.h1>
              <motion.span 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Full Stack Developer
              </motion.span>
              <motion.p variants={container(0)}
                initial="hidden"
                animate="visible" className="mt-4 text-lg text-center lg:text-left lg:mt-8">
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
               <div className="felx justify-center">
                    <motion.img 
                    initial={{x:100, opacity: 0}} 
                    animate={{x:0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    src={profilePic} alt="Kevin Rush" />
               </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  
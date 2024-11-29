import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"; // Corrected import

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-12">
      <h1 className="my-20 text-center text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg"
              src={aboutImg}
              alt="A photo representing me"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }} // Adjusted direction to slide from right
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-6 lg:px-8 mt-8 lg:mt-0"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-lg leading-relaxed text-neutral-400">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

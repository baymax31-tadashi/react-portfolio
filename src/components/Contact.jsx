import { CONTACT } from "../constants";
import { motion } from "framer-motion"; // Correct import

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>

      {/* Contact Information */}
      <div className="text-center tracking-tighter">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email */}
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b hover:text-neutral-500"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

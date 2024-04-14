import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {

    // Function to handle downloading the resume
    const downloadResume = () => {
      // Replace 'your_resume.pdf' with the actual path to your resume file
      const resumeUrl = '/path/to/your_resume.pdf';
      window.open(resumeUrl, '_blank');
    };
  return (
    <section
      id="home"
      className="md:flex md:items-center md:items-center gap-32 md:h-full py-10 mt-20"
    >
      {/* IMAGE SECTION
      <div className="w-full z-10 mt-20 p-10 ml-10 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-40 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[800px] md:max-w-[800px]"
              src="assets/image (2).png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[800px] md:max-w-[800px] object-cover object-center"
            src="assets/newDP.png"
          />
        )}
      </div> */}

      {/* MAIN TEXT */}
      <div className="w-full z-10 flex ">
      <div className="mt-32 md:mt-32 justify-center ml-20">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center">
            Sohail {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              MD
            </span>
          </p>
          <div className="flex justify-center items-center mt-10">
          <p className="m-10 mb-7 w-2/3 text-lg text-center ">
          Empowering Businesses with Tailored SaaS Solutions and Cutting-Edge AI Integration, Unlocking Possibilities Through 4 Years of Full Stack development Expertise.
          <br/>Currently building AI wrappers and other SAAS products.
          </p>
          </div>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-10 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            My Resume
          </AnchorLink> */}

               <a
              href="../../assets/SohailMD.docx" 
              download="SohailMD.docx"
              className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            >
              My Resume
            </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Landing;

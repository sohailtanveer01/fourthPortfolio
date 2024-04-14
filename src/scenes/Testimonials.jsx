import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
export const techStack = [

  // { name: "C Language", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" },
  { name: "HTML", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
  { name: "Javascript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "Redux", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },

  { name: "TypeScript", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "NextJS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Express", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" },

  { name: "NodeJS", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "python", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Flask", link: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
  { name: "Postman", link: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },

  // { name: "Flutter", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" },
  // { name: "React Native", link: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" },

  { name: "Sass", link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },

  { name: "Tailwind CSS", link: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "MySQl", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" },
  { name: "PostgreSQL", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" },
  { name: "supabase", link: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  { name: "Mongo DB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" },
  { name: "Heroku", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" },
  { name: "digitalocean", link: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-icon.svg" },
  // { name: "Azure", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg" },
  { name: "Git", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" },
  { name: "Docker", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
  { name: "vercel", link: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
  // { name: "Bash", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Vim", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },

  // { name: "VS Code", link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  // {name: "", link: "https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d"}
]

const Testimonials = () => {
  return (
    <section id="skills" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          SKILLS
        </p>
        <LineGradient width="w-1/5" />
        <p className="mt-10">
          My skills range from front-end to back-end development, with a focus on building scalable and efficient fullstack applications.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
     
        <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md text-black ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>


   
      </div>
    </section>
  );
};

export default Testimonials;

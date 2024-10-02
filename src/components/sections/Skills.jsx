import { SiCss3, SiJavascript, SiHtml5, SiReact, SiGit, SiGithub, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiNodedotjs, SiExpress, SiTypescript } from "react-icons/si";
import { FaGears } from "react-icons/fa6";

const Skills = () => {
  return (
    <section id='skills' className='p-8 font-roboto'>
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-8 text-center">
        My <span className="text-blue-500">Skills</span>
      </h1>
      
      <div className="flex gap-10 flex-wrap justify-center">
        {[
          { icon: <SiHtml5 className="text-8xl text-blue-500" />, label: "HTML5" },
          { icon: <SiCss3 className="text-8xl text-blue-500" />, label: "CSS3" },
          { icon: <SiTailwindcss className="text-8xl text-blue-500" />, label: "Tailwindcss" },
          {icon: <SiTypescript className="text-8xl text-blue-500" />, label: "Typescript"},
          { icon: <SiJavascript className="text-8xl text-blue-500" />, label: "JavaScript" },
          { icon: <SiReact className="text-8xl text-blue-500" />, label: "React" },
          { icon: <SiNodedotjs className="text-8xl text-blue-500" />, label: "Node" },
          { icon: <SiExpress className="text-8xl text-blue-500" />, label: "Express" },
          { icon: <SiMongodb className="text-8xl text-blue-500" />, label: "Mongodb" },
          { icon: <SiMysql className="text-8xl text-blue-500" />, label: "Mysql" },
          { icon: <SiPostgresql className="text-8xl text-blue-500" />, label: "Postgresql" },
          { icon: <SiGit className="text-8xl text-blue-500" />, label: "Git" },
          { icon: <SiGithub className="text-8xl text-blue-500" />, label: "Github" },
          { icon: <FaGears className="text-8xl text-blue-500" />, label: "RESTful APIs" },
        ].map((skill, index) => (
          <div 
            key={index}
            className="h-40 w-32 p-4 border-2 border-blue-400 flex flex-col gap-2 items-center justify-center
            rounded-lg   ease-in-out hover:border-blue-200 hover:shadow-2xl
            hover:scale-125 transition-transform duration-1000 ">
            {skill.icon}
            <h2 className="text-2xl font-bold text-center">{skill.label}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
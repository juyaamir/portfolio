import { Link } from "react-router-dom";
import { useContext} from "react";
import { projects } from "../../data/data"; 
import { ThemeContext } from "../common/ThemeContext";

const Projects = () => {
/*   const [sourceValue, setSourceValue] = useState('View GitHub');
  const [liveValue, setLiveValue] = useState('See this live'); */
  const { theme } = useContext(ThemeContext);

  return (
    <section id='projects' className="p-8 overflow-auto"  >
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-8 text-center">
        My <span className="text-blue-500">Projects</span>
      </h1>
      <div className="flex items-center gap-8 flex-col justify-center">
        {
          projects.length > 0 && projects.map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row justify-center gap-4 items-center hover:scale-105 rounded-md hover:bg-gray-100 hover:text-black p-4 shadow-lg">
              <img src={project.image} alt={project.imageAlt} 
              className="max-h-56 flex-shrink object-fill"
              />
              <div className="font-roboto pl-4">
                <h3 className="text-2xl font-bold text-blue-500 text-center p-1 border-b-2 max-w-max mx-auto border-sky-300 mb-1 ">{project.title}</h3>
                <p className="text-center md:text-start mobile-size">{project.description}</p>
                <div className="text-sky-500 text-3xl flex flex-wrap justify-center gap-2 my-2 mx-auto p-4">
                {
                project.technologies.length > 0 && (
                  project.technologies.map((technology, index) => (
                    <div key={index} className="hover:scale-125 duration-500">
                      {
                        technology.icon 
                      }
                    </div>
                  ))
                )
              }
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 link-container">
                <Link
                  to={project.githubLink}
                  target="_blank"
                  className="py-1 text-nowrap text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-2 md:px-3 lg:px-4 rounded link-size hover:scale-105 duration-500"
/*                   onMouseEnter={() => setSourceValue('View source')}
                  onMouseLeave={() => setSourceValue('View GitHub')} */
                >
                  View GitHub
                </Link>
                <Link
                  to={project.liveLink}
                  target="_blank"
                  className="py-1 text-nowrap text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-2 md:px-3 lg:px-4 rounded link-size hover:scale-105 duration-500"
/*                   onMouseEnter={() => setLiveValue('Live preview')}
                  onMouseLeave={() => setLiveValue('See this live')} */
                >
                  See this live
                </Link>
              </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Projects;
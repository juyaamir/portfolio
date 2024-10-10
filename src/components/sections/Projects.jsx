import Skeletons from "../common/Skeletons"
import poject1 from "../../assets/images/project1.png"
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { Link } from "react-router-dom"
const Projects = () => {



  return (
    <section id="projects" className="p-8">
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-8 text-center">
        My <span className="text-blue-500"> Projects</span>
      </h1>
      <div className='flex  flex-col md:flex-row items-center gap-8 flex-wrap justify-center'>
        <div 
        className="flex justify-center gap-4 items-center flex-wrap md:flex-nowrap hover:scale-105 rounded-md hover:bg-gray-100">
          
          <img src={poject1} alt="Wellness Hub Project" className=" h-56 block object-fill"/>
          
          <div className="font-roboto  pl-4">
            <h3 className="text-2xl font-bold text-blue-500 text-center ">Wellness Hub</h3>
            <p className="text-center mobile-size">
              Your go-to resource for health and wellness information. Explore a wide range of topics and receive personalized recommendations using our My Health tool.
            </p>
            <div className="text-sky-500 text-3xl flex flex-wrap md:flex-nowrap justify-center gap-2 my-2 mx-auto ">
            <SiTypescript className="hover:scale-110  transition-transform duration-300" title="hi" />
            <RiReactjsFill className="hover:scale-110  transition-transform duration-300" />
            <RiTailwindCssFill className="hover:scale-110  transition-transform duration-300" />
            <FaHtml5 />
            </div>
            <div className="flex flex-warp  items-center justify-center gap-2 link-container">
            <Link to="https://wellness-hub.netlify.app" className="py-1 text-nowrap text-blue-500  border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white 
            px-2 md:px-3 lg:px-4 rounded hover:scale-110 duration-500 link-size">
                View github
              </Link>
              {/* see this live */}
              <Link to="https://wellness-hub.netlify.app" className="py-1 text-nowrap text-blue-500  border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-2 md:px-3 lg:px-4  rounded hover:scale-110 duration-500  link-size">
                See this live
              </Link>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Projects
import Skeletons from "../common/Skeletons";
import project1 from "../../assets/images/project1.png";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [sourceValue, setSourceValue] = useState('View GitHub');
  const [liveValue, setLiveValue] = useState('See this live');

  return (
    <section id="projects" className="p-8 overflow-auto">
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-8 text-center">
        My <span className="text-blue-500">Projects</span>
      </h1>
      <div className="flex items-center gap-8 flex-wrap justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center hover:scale-105 rounded-md hover:bg-gray-100 p-4">
          <img src={project1} alt="Wellness Hub Project" className="max-h-56 flex-shrink object-fill" />
          <div className="font-roboto pl-4">
            <h3 className="text-2xl font-bold text-blue-500 text-center">Wellness Hub</h3>
            <p className="text-center mobile-size">
              Your go-to resource for health and wellness information. Explore a wide range of topics and receive personalized recommendations using our My Health tool.
            </p>
            <div className="text-sky-500 text-3xl flex flex-wrap justify-center gap-2 my-2 mx-auto p-4">
              <SiTypescript className="hover:scale-110 transition-transform duration-300" title="TypeScript" />
              <RiReactjsFill className="hover:scale-110 transition-transform duration-300" title="React" />
              <RiTailwindCssFill className="hover:scale-110 transition-transform duration-300" title="Tailwind CSS" />
              <FaHtml5 className="hover:scale-125 duration-500" title="HTML5" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 link-container">
              <Link
                to="https://github.com/juyaamir/wellness"
                target="_blank"
                className="py-1 text-nowrap text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-2 md:px-3 lg:px-4 rounded link-size"
                onMouseEnter={() => setSourceValue('View source')}
                onMouseLeave={() => setSourceValue('View GitHub')}
              >
                {sourceValue}
              </Link>
              <Link
                to="https://juyaamir.github.io/wellness/"
                target="_blank"
                className="py-1 text-nowrap text-blue-500 border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-2 md:px-3 lg:px-4 rounded link-size"
                onMouseEnter={() => setLiveValue('Live preview')}
                onMouseLeave={() => setLiveValue('See this live')}
              >
                {liveValue}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import { SiJavascript} from "react-icons/si";

export const projects = [
    {
        id: 1,
        title: "Wellness Hub",
        description: "Your go-to resource for health and wellness information. Explore a wide range of topics and receive personalized recommendations using our My Health tool.",
        image: project1,
        imageAlt: "Wellness Hub Project",
        githubLink: "https://github.com/juyaamir/wellness",
        liveLink: "https://juyaamir.github.io/wellness/",
        technologies: [
            { icon: <SiTypescript title="TypeScript" />},
            { icon: <RiReactjsFill title= "React" />},
            { icon: <RiTailwindCssFill title="Tailwind CSS"/> },
            { icon: <FaHtml5 title= "HTML5"/> },
            { icon: <FaCss3 title= "CSS3"/> }
        ]
    }, {
        id: 2,
        title: "To Do List",
        description: "A simple and efficient To-Do List application where you can add, edit, and delete tasks. Mark tasks as completed, with persistent storage using localStorage. The UI is responsive and user-friendly",
        image: project2,
        imageAlt: "To Do List Project",
        githubLink: "https://github.com/juyaamir/to-do-list",
        liveLink: "https://juyaamir.github.io/to-do-list/",
        technologies: [
            { icon: <SiJavascript title="JavaScript" />},
            { icon: <RiReactjsFill title= "React" />},
            { icon: <RiTailwindCssFill title="Tailwind CSS"/> },
            { icon: <FaHtml5 title= "HTML5"/> },
            { icon: <FaCss3 title= "CSS3"/> }
        ]
    }
]
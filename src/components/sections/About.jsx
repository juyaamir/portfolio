import React from "react"
import pic from "../../assets/images/about.jpg"
import '@fontsource/roboto'
import { HashLink as Link } from "react-router-hash-link"

const About = () => {
  return (
    <section id='about' className='text-center  font-roboto p-8'>
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-8">
        About <span className="text-blue-500">Me</span>
      </h1>
      <div className="flex flex-wrap gap-10 justify-center px-2 md:px-4">
        <figure>
          <img src={pic} alt="My Picture" className="w-64 border rounded-full border-blue-500 ring-4 ring-inherit" />
        </figure>
        <p className="text-start text-xl max-w-xl leading-relaxed ">
          Hi, I'm Amir Juya, a full-stack developer with a passion for solving complex challenges and delivering outstanding user experiences. With over four years of IT experience, I’ve honed my skills in JavaScript, React, Node.js, MongoDB, and more, which I’ve applied in projects like JourneyPack—an AI-powered e-commerce platform. My expertise lies in crafting exceptional web applications that translate client ideas into reality.
          I'm a continuous learner and tech enthusiast who thrives in team-oriented, agile environments. My ultimate goal is to create top-notch products that not only meet but exceed expectations.
          <span className="block text-xl font-medium border-b-2 p-1 my-4 border-blue-600 hover:bg-blue-600 hover:text-white w-fit italic ">
            <Link smooth to='#contact'>Contact!</Link>
          </span>
        </p>
      </div>
    </section>
  )
}

export default About
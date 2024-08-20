import Skeletons from "../common/Skeletons"
const Projects = () => {



  return (
    <section id="projects" >
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-8 text-center">
        My <span className="text-blue-500"> Projects</span>
      </h1>
      <div className='flex flex-row gap-8 flex-wrap justify-center'>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
      </div>

    </section>
  )
}

export default Projects
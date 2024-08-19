import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section id='home' className='text-center text-gray-700 mt-6 p-2 md:p-4  lg:p-8'>

      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-4">
        Hi, I am 
        <span className="text-blue-500"> Amir Muhammad Juya</span>
      </h1>
      <div className="block mx-auto w-max">
        <div className="typed-out type1">
          <h2 className="lg:text-3xl md:text-2xl text-xl my-4 introduction ">Full Stack Web Developer </h2>
        </div>
      </div>
{/* 
      <div className="block mx-auto w-max">
        <div className="typed-out type2">
          <h2 className="lg:text-3xl md:text-2xl text-xl my-4">IT Engineer</h2>
        </div>
      </div>
      
      <div className="block w-max mx-auto">
        <div className="typed-out type3">
          <h2 className="lg:text-3xl md:text-2xl text-xl my-4">Tech Enthusiast</h2>
        </div>
      </div> */}

      <div className="mt-10">
        <Link to='https://drive.google.com/file/d/1VJJseYsfq1Lu0uZdTaqgFPocZj_0P1oF/view?usp=drive_link' target="_blank">
          <button type="submit" className="btn text-blue-500 text-lg font-bold  border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-6 md:px-12 lg:px-16   
          rounded  hover:scale-110 duration-500 button-size">
            My CV
          </button>
        </Link>
      </div>

    </section>
  )
}

export default Home
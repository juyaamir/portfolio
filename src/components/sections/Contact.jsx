import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [feedback, setFeedback] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [buttonValue, setButtonValue] = useState('Send Email');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    {
      !feedback ?       
        (
          <section id='contact' className='font-roboto'>
          <h1 className="lg:text-6xl md:text-4xl text-2xl text-center mb-8">Get In 
            <span className="text-blue-500 "> Touch</span>
          </h1>
          <p className='text-xl py-4'>Feel free to reach out to say hello, request my resume, or explore the possibility of creating something incredible together. I’d love to connect!</p>
          <div className="flex justify-center gap-10 flex-wrap">
          <form className=" max-w-96  flex flex-col gap-6 w-full md:w-2/5" onSubmit={handleSubmit}>
            <div>
              <input type="text" value={formData.name} placeholder="Name" name='name' className="border-2 border-blue-500 p-3 rounded-lg w-full " required
              onChange={handleChange}/>
            </div>
            <div>
              <input type="email" value={formData.email} placeholder="Email" name='email' className="border-2 border-blue-500 p-3 rounded-lg w-full" required
              onChange={handleChange}/>
            </div>
            <div>
              <textarea placeholder="Message" rows={10} name='message' className="border-2  border-blue-500 p-2 rounded-lg w-full" required value={formData.message}
              onChange={handleChange} />
            </div>
            <input 
              type="submit" 
              value={buttonValue} 
              className="btn text-blue-500 text-base font-bold border-2 p-3 border-blue-500 bg-white hover:bg-blue-500 
              hover:text-white hover:border-none mx-auto hover:shadow-2xl" 
              onMouseEnter={() => setButtonValue('Send Email'+ ' 📧')}
              onMouseLeave={() => setButtonValue('Send Email')}
            />
          </form>
          <div className="w-2/5">
          <h1 className='text-center text-xl'>Reach out to me on the following social media channels.</h1>
          <div className='flex gap-10 mt-8 justify-center flex-wrap'>
            <Link to="https://www.linkedin.com/in/amj2/" target="_blank" rel="noreferrer">
              <SiLinkedin className="text-4xl text-blue-500 hover:text-blue-600 hover:shadow-2xl
              hover:scale-150 transition-transform duration-700" />
            </Link>
            <Link to="https://github.com/juyaamir" target='_blank'>
              <SiGithub className="text-4xl text-blue-500 hover:text-blue-600 hover:shadow-2xl
              hover:scale-150 transition-transform duration-700" />
            </Link>
            <Link to="mailto:juyaamirm@gmail.com" className="text-4xl text-blue-500 hover:text-blue-600 hover:shadow-2xl hover:scale-150 transition-transform duration-700">
              <SiGmail />
            </Link>
          </div>
          </div>
          </div>
        </section>
        ): (
            <div 
            className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 flex justify-center items-center '>
            <div className='bg-white p-8 rounded-md shadow-md'>
              <h1 className='text-2xl font-bold text-center'>Thank you for reaching out to me!</h1>
              <p className='text-center'>I will get back to you as soon as possible.</p>
              <button onClick={() => setFeedback(false)} className='w-full mt-4 bg-blue-500 p-2 text-white rounded-md hover:bg-blue-700'>Close</button>
            </div>
            </div>
        )   
    }
    </>
  )
}

export default Contact
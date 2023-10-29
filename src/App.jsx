import {BrowserRouter} from 'react-router-dom'
import {Navbar,Hero,About,Contact,Projects,Testimonials,TechStack,Works} from './components'
const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
   <div className='bg-hero-image bg-cover bg-no-repeat bg-center'>
    <Navbar/>
    <Hero/>
   </div>
   <About/>
   <Works/>
   <TechStack/>
   <Projects/>
   <Testimonials/>
   <div className='relative z-0'>
    <Contact/>
   </div>

    </div>
    </BrowserRouter>
  )
}

export default App

import {motion} from 'framer-motion'
import {styles} from '../styles'
import { ComputerCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    <div className='flex flex-col justify-center items-center mt-5'>
    <div className='w-5 h-5 rounded-full bg-[#6A9C89]'/>
    <div className='w-1 sm:h-80 h-40 green-gradient'/>
    </div>
    <div>
    <h1 className={`${styles.heroHeadText} text-black-100 sm:100`}>Hi, I'm <span className='text-[#6A9C89]'>Vanshika</span></h1>
    <p className={`${styles.heroSubText}  text-black-100`}> I develop web applications and user interfaces</p>
    </div>
    </div>
    <ComputerCanvas/>
    <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero

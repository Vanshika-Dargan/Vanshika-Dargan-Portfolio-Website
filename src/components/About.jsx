import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { textVariant,fadeIn } from '../utils/motion'
import {services} from '../constants'
import { SectionWrapper } from '../hoc'
const ServiceCard=({index,title,icon})=>(
    <Tilt className='w-[250px]'>
      <motion.div
      variants={fadeIn('right','spring',0.5*index,0.75)}
      className='green-pink-gradient w-full p-[1px] rounded-[20px] shadow-card'
      >
      <div options={{
        max:45,
        scale:1,
        speed:450
      }} className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img src={icon} className='w-16 h-16 object-contain'/>
      <h3 className='text-tertiary text-[20px] font-bold text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )

const About = () => {
  return (
    <div>
    <motion.div variants={textVariant(0.25)}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      
    </motion.div>
    <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-tertiary text-[17px] max-w-4xl leading-[30px]'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod esse eum eveniet tenetur quibusdam voluptatum illo et soluta, placeat obcaecati consequuntur reiciendis aliquid repellendus. Odio incidunt ex consectetur quibusdam necessitatibus!
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
       {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
       ))}
    </div>
    <div>

    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
    
    </div>
    </div>
  )
}

export default SectionWrapper(About,'about')
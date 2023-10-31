
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { textVariant,fadeIn } from '../utils/motion'
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      
    </motion.div>
    <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-tertiary text-[17px] max-w-6xl leading-[30px]'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod esse eum eveniet tenetur quibusdam voluptatum illo et soluta, placeat obcaecati consequuntur reiciendis aliquid repellendus. Odio incidunt ex consectetur quibusdam necessitatibus!
    </motion.p>
    <div>
      
    </div>
    </>
  )
}

export default About
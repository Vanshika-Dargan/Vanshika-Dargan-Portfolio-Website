import { Tilt } from "react-tilt"
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { SectionWrapper } from "../hoc"
import { fadeIn,textVariant } from "../utils/motion"
import { projects } from "../constants"
import { github } from "../assets"
const ProjectCard=({index,name,description,tags,image,source_code_link})=>{
  return (
    <motion.div variants={fadeIn('up','spring',index*0.5,0.75)}>
      <Tilt 
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary p-5 rounded-2xl w-[360px]'
      >
     <div className='relative w-full h-[230px]'>
     <img src={image} alt={name}
     className='w-full h-full object-cover rounded-2xl'/>
     </div>
     <div className='absolute inset-0 flex justify-end m-6'>
      <div 
      onClick={()=>window.open(source_code_link,"_blank")}
      className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black"
      >
      <img 
      src={github}
      alt='github'
      className='w-1/2 h-1/2 object-contain'
      />
      </div>
     </div>
     <div className='mt-5'>
    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
    <p className='mt-2 text-white text-[14px] '>{description}</p>
     </div>
     <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag)=>(
        <p key={tag.name} className={`text-[14px] ${tag.color}`}>
          #{tag.name}     
        </p>
      ))}
     </div>
      </Tilt>
    </motion.div>
  )

}
const Projects = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
      What have I build so far?
      </p>
      <h2 className={styles.sectionHeadText}>
      Projects.
      </h2>

    </motion.div>
    <div className='w-full flex'>
    <motion.p 
    variants={fadeIn('','',0.1,1)}
    className='mt-3 text-tertiary text-[17px] max-w-4xl leading-[30px]'
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam iure assumenda blanditiis excepturi omnis ipsum hic voluptatem consequatur ipsam, corporis perferendis numquam nihil incidunt? Soluta nostrum possimus dolore fuga.
    </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index)=> (
        <ProjectCard
        key={`project-${index}`}
        index={index}
        {...project} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(Projects,"");
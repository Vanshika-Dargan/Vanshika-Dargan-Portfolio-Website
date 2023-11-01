import {BallCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {techs} from '../constants'
const TechStack = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {techs.map((tech)=>(
        <div className='w-28 h-28' key={techs.name}>
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(TechStack,'');
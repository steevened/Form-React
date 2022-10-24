import { VscQuestion } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <VscQuestion size={30} />
      </Link>
    </div>
  )
}

export default About

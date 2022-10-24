import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h2>Made by Steven Alvarado </h2>
        {/* <h3>@Steevened</h3> */}
        <Link to='/'>Return to home</Link>
      </div>
    </Card>
  )
}

export default AboutPage

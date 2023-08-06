import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const Test = () => {
  return (
    <div >
      <h1  style={{ paddingTop:'', margin: 'auto 0', fontWeight: 'normal' }}>
        I am {' '}
        <span className='font-bold text-pink-600'>
          
          <Typewriter
            words={['Web Developer', 'Backend Developer', 'MERN Stack Developer']}
            loop={true}
            cursor
            cursorColor='red'
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            />
        </span>
        
      </h1>
    </div>
  )
}

export default Test

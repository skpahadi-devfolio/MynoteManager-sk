import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Typeanimationtext = () => {
  return (
    <div>
      <TypeAnimation
      sequence={[
        'To Note Manager App', // Types 'Note Manager app'
        1000,                  // Waits 1s
        'Open to Add Your note', // Deletes 'Web' and types 'Mobile'
        2000,                  // Waits 2s
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      className='md:text-4xl text-2xl'
    />
    </div>
  )
}

export default Typeanimationtext

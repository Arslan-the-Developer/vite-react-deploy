import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import BlurText from '../../Components/BlurText/BlurText'

function HomeScreen() {


  return (

    <section className='w-full h-screen flex items-center flex-col justify-start'>
        <Navbar />
        <div className='w-full h-150 flex items-center justify-center flex-col'>

            <h2 className='text-3xl'>Welcome To Site</h2>
            <h2 className='text-3xl mt-6'>Everything Is Working Correctly</h2>

            <span className=''>
            <BlurText
              text="Arslan Ahmed"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
            />
            </span>

        </div>
    </section>

  )

}


export default HomeScreen
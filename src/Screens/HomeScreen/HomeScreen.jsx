import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import RotatingText from '../../Components/RotatingText/RotatingText'

function HomeScreen() {


  return (

    <section className='w-full h-screen flex items-center flex-col justify-start'>
        <Navbar />
        <div className='w-full h-150 flex items-center justify-center flex-col'>

            <h2 className='text-3xl'>Welcome To Site</h2>
            <h2 className='text-3xl mt-6'>Everything Is Working Correctly</h2>

            <span className=''>
            <RotatingText
                texts={['Programmer', 'Full Stack Developer', 'Freelancer', 'API Expert']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"first"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>

        </div>
    </section>

  )

}


export default HomeScreen
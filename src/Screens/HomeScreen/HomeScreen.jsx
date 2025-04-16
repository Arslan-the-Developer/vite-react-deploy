import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import axios from 'axios'
import ShinyText from '../../Components/ShinyText/ShinyText'
import FuzzyText from '../../Components/FuzzyText/FuzzyText'


function HomeScreen() {

    async function GetBlogsFromEB() {

        const response = await axios({
            url : "https://79c9-58-27-197-114.ngrok-free.app/authentication/check_user_authentication",
            method : "get",
            withCredentials : true,
        });

        console.log(response.data);
        
    }

    useEffect(() => {
        GetBlogsFromEB();
    }, []);


  return (

    <section className='w-full h-screen flex items-center flex-col justify-start'>
        <Navbar />
        <div className='w-full h-150 flex items-center justify-center flex-col'>

            <h2 className='text-3xl'>Welcome To Site</h2>
            <h2 className='text-3xl mt-6'>Everything Is Working Correctly</h2>

            <span className='bg-black'>
                <FuzzyText baseIntensity={0.2} hoverIntensity={1} enableHover={true}>404</FuzzyText>
                <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />
            </span>

        </div>
    </section>

  )

}


export default HomeScreen
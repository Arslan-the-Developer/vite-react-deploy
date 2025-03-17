import React from 'react'



function Navbar() {

  return (

    <nav className='w-full h-16 flex items-center justify-center shadow-md'>

        <div className='w-1/4 h-full flex items-center justify-center text-2xl font-bold'>Vendezy</div>
        <div className='w-1/2 h-full flex items-center justify-around transition-all'>
            <p>Home</p>
            <p>About</p>
            <p>Products</p>
            <p>Contact</p>
        </div>
        <div className='w-1/4 h-full flex items-center justify-center'>
            <button className='px-6 py-2 bg-green-800 text-white rounded-sm'>
                Log In
            </button>
        </div>

    </nav>

  )

}


export default Navbar
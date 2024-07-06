import React from 'react'
import { BiSearch, BiCurrentLocation } from 'react-icons/bi'

const Input = () => {
    return (
        <div className='flex flex-row justify-center my-6 '>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4 '>
                <input 
                type="text" 
                placeholder='Search by city...' 
                className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize outline-none rounded-md placeholder:lowercase' />
                <BiSearch size={30} className='cursor-pointer transition ease-out hover:scale-125'/>
                <BiCurrentLocation size={30} className='cursor-pointer transition ease-out hover:scale-125'/>

            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button className='text-xl font-medium transition ease-out hover:scale-125'>°C</button>
                <p className='text-xl  font-medium mx-1'>|</p>
                <button className='text-xl font-medium transition ease-out hover:scale-125'>°F</button>
            </div>
        </div>
    )
}

export default Input

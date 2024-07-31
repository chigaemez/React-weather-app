import React, { useState } from 'react'
import { BiSearch, BiCurrentLocation } from 'react-icons/bi'
import { CgMenuLeft } from "react-icons/cg";
import TopBotton from './TopBotton';
import { cities } from '../Services/Data';

const Input = ({ setQuery, setUnits }) => {

    const [city, setCity] = useState("")
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuClick = () => {
        setToggleMenu(!toggleMenu);
    };


    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city })
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords
                setQuery({ lat: latitude, lon: longitude })
            })
        }
    }

    return (
        <>
            <div className="lg:hidden md:hidden absolute top-2 left-3 block space-y-1 cursor-pointer " onClick={handleMenuClick}>
                <CgMenuLeft className='text-2xl text-slate-800' />
            </div>
            {
                toggleMenu && (
                    <div className='flex gap-3 lg:hidden md:hidden flex-col  w-full justify-center my-6  absolute top-3 right-0   bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-md py-4 px-1 bg-gradient-to-br from-cyan-600 to-blue-700'>
                        <div className='flex flex-row w-full px-2 items-center justify-center space-x-4 '>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.currentTarget.value)}
                                type="text"
                                placeholder='Search by city...'
                                className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize outline-none rounded-md placeholder:lowercase' />
                            <BiSearch size={30} onClick={handleSearchClick} className='cursor-pointer transition ease-out hover:scale-125' />
                            <BiCurrentLocation size={30} onClick={handleLocationClick} className='cursor-pointer transition ease-out hover:scale-125' />

                        </div>
                       

                        <div className='items-center  justify-around flex  my-6 '>
                            {
                                cities.map((city) => (
                                    <button
                                        key={city.id}
                                        className='text-lg font-medium hover:bg-gray-700/20 lg:px-4 px-2  py-3 rounded-md transition ease-in'
                                        onClick={() => setQuery({ q: city.name })}
                                    >{city.name} </button>
                                ))
                            }

                        </div>


                    </div>

                )
            }


            
                    <div className='lg:flex md:flex hidden gap-3  flex-row  w-full justify-center my-6  '>
                        <div className='flex flex-row w-full px-2 items-center justify-center space-x-4 '>
                            <input
                                value={city}
                                onChange={(e) => setCity(e.currentTarget.value)}
                                type="text"
                                placeholder='Search by city...'
                                className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize outline-none rounded-md placeholder:lowercase' />
                            <BiSearch size={30} onClick={handleSearchClick} className='cursor-pointer transition ease-out hover:scale-125' />
                            <BiCurrentLocation size={30} onClick={handleLocationClick} className='cursor-pointer transition ease-out hover:scale-125' />

                        </div>
                        
                    </div>

            
        </>
    )
}

export default Input

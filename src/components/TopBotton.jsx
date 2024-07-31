import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const TopBotton = ({ setQuery, setUnits, units }) => {
    const [setting, setSetting] = useState(false)
    const [isOpen, setIsOpen] = useState(false) 
    const menuRef = useRef()

    const HandelSettings = () => {
        setSetting(!setting)
    }

    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Sydney'
        },
        {
            id: 3,
            name: 'Tokyo'
        },
        {
            id: 4,
            name: 'Paris'
        },
        {
            id: 5,
            name: 'Toronto'
        }
    ]

    useEffect: (() => {
        let handler = (e) => {
            if(e.target){
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handler)
    })

    return (
        <div className='items-center  justify-around flex  my-6 '>
            <div className="flex items-center justify-between gap-5">
                {
                    cities.map((city) => (
                        <button
                            key={city.id}
                            className='text-lg font-medium hover:bg-gray-500/50 lg:px-10 gap-5 justify-around px-5 border-[1px] border-gray-500 flex items-center  py-2 rounded-lg transition ease-in'
                            onClick={() => setQuery({ q: city.name })}
                        >{city.name}  </button>
                    ))
                }
            </div>


            <div className="flex items-center justify-center flex-col">
                <div onClick={HandelSettings} className=' bg-[#171e44] px-2 py-2 rounded-md cursor-pointer'>
                    {
                        units === "metric" ? "°C" : "°F"
                    }
                </div>

                {
                    setting && (
                        <div className='w-[25%] z-[999] card-compact rounded-md py-2 px-3 bg-slate-950 top-[110px] absolute right-[265px]'>
                            <div className="flex items-center justify-between">
                                <h1 className='text-base uppercase'>weather settings</h1>
                                <IoMdClose className='cursor-pointer' onClick={HandelSettings} />
                            </div>
                            <h2 className='my-3'>Temperature</h2>

                            <div className="flex items-center gap-7 my-3 ">
                                <button className='border px-5 py-1' onClick={() => setUnits("imperial")}>Fahrenheit(°F)</button>
                                <button className='border px-5 py-1' onClick={() => setUnits("metric")}>Celsius(°C)</button>
                            </div>

                            <div className="flex items-center my-4 justify-between">
                                <h1 className='text-sm'>Background Theme</h1>

                                <div className="flex gap-2 ">
                                    <label className='text-sm' >Automatic</label>
                                    <input type="radio" name="radio-1" className="radio" />
                                    <label className='text-sm'>Dark</label>
                                    <input type="radio" name="radio-1" className="radio" defaultChecked  />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default TopBotton

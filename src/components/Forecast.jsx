import React, { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const Forecast = ({ title, data }) => {
    const [showForcast, setShowForcast] = useState(false)
    return (
        <div className='px-3'>
            <div className='flex items-center justify-between mt-6 cursor-pointer' onClick={() => setShowForcast(!showForcast)}>
                <p className='font-medium uppercase ' >{title}</p>
                <>
                    {showForcast ? <MdKeyboardArrowUp  className='text-3xl font-semibold'/>: <MdKeyboardArrowDown className='text-3xl font-semibold'/>  }
                </>
            </div>
            <hr className='my-1' />

            {
                showForcast && (
                    <div className=' flex items-center justify-between '>
                        {
                            data.map((d, index) => (
                                <div key={index} className='flex flex-col items-center justify-center'>
                                    <p className='font-light text-sm'>{d.title}</p>
                                    <img src={d.icon} alt="Weather icon" className='w-12 my-1' />
                                    <p className='font-medium'>{`${d.temp.toFixed()}°`}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Forecast

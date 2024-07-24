import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaThermometerEmpty } from 'react-icons/fa'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'



const TempAndDetail = ({ weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max, 
    sunrise, 
    sunset, 
    speed, 
    humidity, 
    feel_like
},
    units
 }) => {

    const VerticalDetails = [
     
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Humidity",
            value: `${humidity}`
        },
        {
            id: 3,
            Icon: FiWind,
            title: "Wind",
            value: `${speed.toFixed()} ${units === "metric" ? "km/h" : "m/s"}`
        }
    ]


    
    return (
        <div className='px-3'>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300 '>
                <p>{details}</p>
            </div>
            <div className='flex flex-row items-center justify-between py-3'>
                <img src={icon} alt="Weather icon" className='w-20' />
                <p className='text-4xl'>{`${temp.toFixed() }°`}</p>

                <div className="flex flex-col space-y-3 items-start">

                    {
                        VerticalDetails.map(({ id, Icon, title, value }) => (
                            <div key={id} className='flex font-light text-sm items-center justify-center'>
                                <Icon size={18} className='mr-1' />
                                {`${title}:`} <span className='font-medium ml-1'>{value}</span>
                            </div>
                        ))
                    }

                </div>
            </div>

            
        </div>
    )
}

export default TempAndDetail

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
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Real Feel",
            value: `${feel_like}`
        },
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


    const HorizontalDetail = [
        {
            id: 1,
            Icon: GiSunrise,
            title: "Sunrise",
            value: sunrise
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Sunset",
            value: sunset
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "High",
            value: `${temp_max}`
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "Low",
            value: `${temp_min}`
        }
    ]
    return (
        <div>
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

            <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3'>
                {
                    HorizontalDetail.map(({ id, Icon, title, value }) => (
                        <div key={id} className='flex flex-row items-center'>
                            <Icon size={30} />
                            <p className='font-light ml-1'> {`${title}:`} <span className='font-medium ml-1'>{value}</span></p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default TempAndDetail

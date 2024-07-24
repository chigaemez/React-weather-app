import React, { useState } from 'react'
import { cities } from '../Services/Data';

const TopBotton = ({ setQuery }) => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuClick = () => {
        setToggleMenu(!toggleMenu);
    };
 

    return (
        <div className='items-center  justify-around lg:flex md:flex hidden my-6 '>
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
    )
}

export default TopBotton

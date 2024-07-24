import React from 'react'

const TopBotton = ({ setQuery }) => {
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

    return (
        <div className='items-center justify-around flex my-6 '>
            {
                cities.map((city) => (
                    <button 
                    key={city.id} 
                    className='text-lg font-medium hover:bg-gray-700/20 px-4 py-3 rounded-md transition ease-in'
                    onClick={() => setQuery({q: city.name})}
                    >{city.name} </button>
                ))
            }

        </div>
    )
}

export default TopBotton

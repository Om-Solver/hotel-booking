import React, { useEffect, useState } from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const RecommendedHotels = () => {
    const {rooms, searchedCities} = useAppContext();
    const [recommended, setRecommended] = useState([]);

    const filterHotels = () => {
        const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hotel.city));
        setRecommended(filteredHotels);
    }

    useEffect(() => {
        filterHotels()
    }, [rooms, searchedCities])

    return recommended.length > 0 && (
        <section className='w-full bg-slate-50'>
            <div className='container mx-auto px-6 md:px-16 lg:px-24 py-20'>
                <Title 
                    title='Recommended Hotels' 
                    subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.' 
                />

                <div className='w-full mt-16'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {recommended.slice(0, 4).map((room, index) => (
                            <div key={room._id}>
                                <HotelCard room={room} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecommendedHotels

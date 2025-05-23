import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
    return (
        <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id}
            className='block w-full rounded-xl overflow-hidden bg-white text-gray-500/90 
                     shadow-md hover:shadow-lg transition-all duration-300'>
            <div className='relative h-48 overflow-hidden'>
                <img 
                    src={room.images[0]} 
                    alt={room.hotel.name}
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                />
                {index % 2 === 0 && (
                    <p className='absolute top-3 left-3 px-3 py-1 text-xs bg-white/90 backdrop-blur-sm 
                               text-gray-800 font-medium rounded-full'>
                        Best Seller
                    </p>
                )}
            </div>

            <div className='p-4 space-y-3'>
                <div className='flex items-start justify-between gap-2'>
                    <h3 className='font-playfair text-lg font-medium text-gray-800 line-clamp-1'>
                        {room.hotel.name}
                    </h3>
                    <div className='flex items-center gap-1 text-amber-500 shrink-0'>
                        <img src={assets.starIconFilled} alt="star-icon" className='w-4 h-4'/> 
                        <span>4.5</span>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-gray-500'>
                    <img src={assets.locationIcon} alt="location-icon" className='w-4 h-4 shrink-0'/>
                    <span className='text-sm line-clamp-1'>{room.hotel.address}</span>
                </div>

                <div className='flex items-center justify-between pt-3 border-t border-gray-100'>
                    <div>
                        <span className='text-lg font-medium text-gray-800'>${room.pricePerNight}</span>
                        <span className='text-sm text-gray-500'>/night</span>
                    </div>
                    <button className='px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 
                                   rounded-lg hover:bg-blue-600 hover:text-white transition-colors'>
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard

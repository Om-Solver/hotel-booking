import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
    return (
        <section className='w-full bg-slate-50'>
            <div className='container mx-auto px-6 md:px-16 lg:px-24 py-20'>
                <Title 
                    title="What Our Guests Say" 
                    subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
                />
                
                <div className='w-full mt-16'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} 
                                className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
                                <div className="flex items-center gap-4">
                                    <img 
                                        className="w-14 h-14 rounded-full object-cover" 
                                        src={testimonial.image} 
                                        alt={testimonial.name} 
                                    />
                                    <div>
                                        <h3 className="font-playfair text-xl text-gray-800">{testimonial.name}</h3>
                                        <p className="text-gray-500 text-sm">{testimonial.address}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-1 mt-4">
                                    <StarRating />
                                </div>
                                
                                <p className="text-gray-600 mt-4 leading-relaxed text-sm">"{testimonial.review}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial

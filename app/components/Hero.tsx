import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className="hero">
            <Navbar />
            <div className="hero-in">
                <div className="py-10 px-2 md:py-50 md:px-70 text-center">
                    <div className="text-[64px] kaushan">Discover Exclusive Films & Shows</div>
                    <p className="text-[18px]">Explore a curated selection of films and TV shows, premiering exclusively at SarangVerse. Elevate your entertainment experience today.</p>
                    <button className="mt-4 cursor-pointer bg-transparent border-2 border-white text-white py-2 px-4 rounded-md hover:color-gray duration-200">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
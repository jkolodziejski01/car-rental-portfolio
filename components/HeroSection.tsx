import Link from 'next/link'
import React from 'react'


const HeroSection = () => {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-4xl md:text-6xl text-gray-800 font-bold mb-4">
          Welcome to our Car Rental Company
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          We offer a wide range of vehicles to suit your needs. Rent a car from us and enjoy your journey with peace of mind.
        </p>
        <Link href="/personal-form">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">
          Book Now
        </button>
        </Link>
      </div>
      <div>
        <img src="/imgs/hero-car.png" alt="Car" className="object-contain w-full h-full" />
      </div>
    </div>

    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <i className="fas fa-star text-3xl text-yellow-500 mb-4"></i>
          <h3 className="text-lg font-bold mb-2">Quality Vehicles</h3>
          <p className="text-gray-600">Our fleet of vehicles is regularly maintained and updated to ensure a safe and comfortable ride.</p>
        </div>
        <div className="text-center">
          <i className="fas fa-credit-card text-3xl text-green-500 mb-4"></i>
          <h3 className="text-lg font-bold mb-2">Easy Payment</h3>
          <p className="text-gray-600">We offer flexible payment options to make renting a car easy and convenient.</p>
        </div>
        <div className="text-center">
          <i className="fas fa-phone text-3xl text-blue-500 mb-4"></i>
          <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Our customer support team is available 24/7 to assist with any questions or concerns.</p>
        </div>
      </div>
    </div>

    </div>

    
  )
}

export default HeroSection
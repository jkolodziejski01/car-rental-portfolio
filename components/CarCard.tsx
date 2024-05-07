import React from 'react'

interface CarCardProps {
  url: string
  desc: string
}

const CarCard: React.FC<CarCardProps> = ({ url, desc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={url} alt="Car" className="w-full h-40 object-cover mb-4" />
      <p className="text-lg font-bold mb-2">{desc}</p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">View Details</button>
    </div>
  )
}

export default CarCard
import React from 'react'

interface CarDetailsProps {
    detaileddesc: string;
    url: string;
    mark: string;
    model: string;
    manifacturedate: number;

}

const CarDetailsCard: React.FC<CarDetailsProps> = ({ detaileddesc, url, mark, model, manifacturedate }) => {
  return (
    <div>
        <img src={url} alt="Car" className="w-full h-96 object-contain mb-4" />
      <div className="bg-black w-full h-0.5 rounded-lg mb-2"></div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
      <p className="text-6xl font-bold mb-2">Mark: {mark}</p>
      <p className="text-4xl font-bold mb-2">Model: {model}</p>
      <p className="text-2xl font-bold mb-2">Manifacture date: {manifacturedate}</p>
      </div>
      <div className="bg-black w-full h-0.5 rounded-lg mb-2"></div>
      <p className="text-lg mb-2">{detaileddesc}</p>
      <div className="bg-black w-full h-0.5 rounded-lg mb-2"></div>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full text-center hover:bg-blue-600 transition duration-200">Accept</button>
    </div>
    
  )
}

export default CarDetailsCard
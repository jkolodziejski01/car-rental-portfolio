'use client';

import React from 'react'
import { useSearchParams } from 'next/navigation';
import CarDetailsCard from '@/components/CarDetailsCard';





const CarDetails = () => {

    const searchParams = useSearchParams()
    const car = searchParams?.get('car')
    const carDetailsList = JSON.parse(car)
    console.log(carDetailsList)

    
  return (

    <div className="p-5 sm:px-10 md:px=20">
    <CarDetailsCard
    detaileddesc={carDetailsList.detaileddesc}
    url={carDetailsList.imgurl}
    mark={carDetailsList.mark}
    model={carDetailsList.model}
    manifacturedate={carDetailsList.manifacturedate}
    />
    </div>
    
  )
}

export default CarDetails
'use client';

import React from 'react'
import { useSearchParams } from 'next/navigation';





const CarDetails = () => {

    const searchParams = useSearchParams()
    const car = searchParams?.get('car')
    const carDetailsList = JSON.parse(car)
    console.log(carDetailsList)

    
  return (
    <div>{carDetailsList.desc}</div>
  )
}

export default CarDetails
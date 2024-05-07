"use client";
import React, { useState, useEffect } from 'react'
import CarCard from './CarCard'
import { getCarsList } from '@/services';


const CarList = () => {
    const [carList, setCarList] = useState([])



    useEffect(() => {
        getCarsList_();
    }, [])
    const getCarsList_ = async () => {
        const result:any = await getCarsList()
        setCarList(result?.carLists)
    }

    console.log(carList)

  return (
    <div>
        <CarCard url='as' desc='s'></CarCard>
    </div>
  )
}

export default CarList
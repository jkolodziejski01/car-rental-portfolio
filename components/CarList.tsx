"use client";
import React, { useState, useEffect } from 'react'
import CarCard from './CarCard'
import { getCarsList } from '@/services';


const CarList = () => {
    const [carList, setCarList] = useState<any>([])
    const [formData, setFormData] =useState([])

    useEffect(() => {
        getCarsList_();
    }, [])
    const getCarsList_ = async () => {
        const result:any = await getCarsList()
        setCarList(result?.carLists)
    }

    useEffect(() => {
        const data = window.localStorage.getItem('FORM_DATA');
        if ( data !== null ) setFormData(JSON.parse(data));
      }, [])
    
    console.log(formData)


  return (
    <div>
        {carList.map((car, index) => (
            <CarCard 
            key={index} 
            url={car.imgurl} 
            mark={car.mark} 
            model={car.mark} 
            manifacturedate={car.manifacturedate} 
            desc={car.desc} 
            price={car.price}>
            </CarCard>
        ))}
    </div>
  )
}

export default CarList
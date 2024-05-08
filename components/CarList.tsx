"use client";
import React, { useState, useEffect } from 'react'
import CarCard from './CarCard'
import { getCarsList } from '@/services';
import Link from 'next/link';


const CarList = () => {
    const [carList, setCarList] = useState<any>([])
    const [formData, setFormData] =useState<any>([])
    const [checked, setChecked] = useState(false)
    const [confirmed, setConfirmed] = useState(false)
    const salary = parseInt(formData.salary)
    const timeInCurrentJob = parseInt(formData.timeInCurrentJob)
    const monthlyExpenses = parseInt(formData.monthlyExpenses)
    const paymentDuration = parseInt(formData.paymentDuration)

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
    

    useEffect(() => {
        calcRisk()  
    })

    const checkSalary = () => { 
        if (salary < 2100) {
            setCarList(carList.filter(car => new Date(car.manifacturedate) < new Date(2021)))
        }
        setConfirmed(true)
     }

    const calcRisk = () => {
        if (salary - monthlyExpenses > 1400) {
            if (timeInCurrentJob >= 12) {
                if (confirmed !== false) {
                    setChecked(true)
                }
            }
        }
    }


  return (
    <div>

        {confirmed? (
            <h1 className="text-center font-bold text-5xl mb-2">Pick your car from the list</h1>
        ) : (
            <div className='bg-white p-6 rounded-lg w-full h-50'>
            <h1 className="text-center font-bold text-5xl mb-2">Almost there...</h1>
            <h1 className='text-center mb-4'>Please check if your data is correct.</h1>
            <div className='flex text-center flex-col justify-center'>
                <p>Name: {formData.name}</p>
                <p>Surname: {formData.surname}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>
                <p>Salary: {formData.salary}</p>
                <p>Monthly Expenses: {formData.monthlyExpenses}</p>
                <p>Time in your current Job: {formData.timeInCurrentJob}</p>
                <p>Payment duration: {formData.paymentDuration}</p>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                <Link href="/personal-form">
                <button className="bg-red-500 text-white px-6 py-3 rounded-lg w-40 text-center mx-2 my-2 hover:bg-red-600 transition duration-200">Go Back</button>
                </Link>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-lg w-40 text-center mx-2 my-2 hover:bg-blue-600 transition duration-200" onClick={checkSalary}>Confirm</button>
                </div>
            </div>
        </div>
        )}

        
        {checked? (
    <div>
      {carList.map((car, index) => (
        <Link 
        href={{
            pathname: `/${car.id}`,
            query: {car: JSON.stringify(car)}
        }}
        key={index}
        >
        
        <CarCard
          key={index}
          url={car.imgurl}
          mark={car.mark}
          model={car.model}
          manifacturedate={car.manifacturedate}
          desc={car.desc}
          price={car.price}
          monthlyPrice={Math.round(car.price / paymentDuration) }
        />
        
        </Link>
      ))}
    </div>
  ) : (
    <div>
      
    </div>
  )}
    </div>
  )
}

export default CarList
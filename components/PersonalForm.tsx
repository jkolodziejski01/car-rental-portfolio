"use client";
import React, { FormEvent, useState } from 'react'

interface FormState {
  name: string
  surname: string
  email: string
  phone: string
  salary: string
  monthlyExpenses: string
  timeInCurrentJob: string
  paymentDuration: string
}

const PersonalForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormState>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    salary: '',
    monthlyExpenses: '',
    timeInCurrentJob: '',
    paymentDuration: ''
  })
  const [errors, setErrors] = useState<FormState>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    salary: '',
    monthlyExpenses: '',
    timeInCurrentJob: '',
    paymentDuration: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = {...errors}
    let isValid = true

    if (!formData.name) {
      newErrors.name = 'Name is required'
      isValid = false
    } else {
      newErrors.name = ''
    }

    if (!formData.surname) {
      newErrors.surname = 'Surname is required'
      isValid = false
    } else {
      newErrors.surname = ''
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    } else {
      newErrors.email = ''
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
      isValid = false
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
      isValid = false
    }  
    else {
      newErrors.phone = ''
    }

    if (isValid) {
      setStep(step + 1)
    } else {
      setErrors(newErrors)
    }
  }

  const handleSubmit2 = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = {...errors}
    let isValid = true

    if (!formData.salary) {
      newErrors.salary = 'Salary is required'
      isValid = false
    } else if (formData.salary === '0') {
      newErrors.salary = 'Salary must be greater than 0'
      isValid = false
    } else {
      newErrors.salary = ''
    }

    if (!formData.monthlyExpenses) {
      newErrors.monthlyExpenses = 'Monthly expenses are required'
      isValid = false
    } else if (formData.monthlyExpenses === '0') {
      newErrors.monthlyExpenses = 'Monthly expenses must be greater than 0'
      isValid = false
    } else {
      newErrors.monthlyExpenses = ''
    }

    if (!formData.timeInCurrentJob) {
      newErrors.timeInCurrentJob = 'Time in current job is required'
      isValid = false
    } else if (formData.timeInCurrentJob === '0') {
      newErrors.timeInCurrentJob = 'Time in current job must be greater than 0'
      isValid = false
    } else {
      newErrors.timeInCurrentJob = ''
    }

    if (isValid) {
      setStep(step + 1)
    } else {
      setErrors(newErrors)
    }
  }
  const handleSubmit3 = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newErrors = {...errors}
    let isValid = true

    if (!formData.paymentDuration) {
      newErrors.paymentDuration = 'Payment duration is required'
      isValid = false
    } else if (formData.paymentDuration === '0') {
      newErrors.paymentDuration = 'Payment duration must be greater than 0'
      isValid = false
    } else {
      newErrors.paymentDuration = ''
    }

    if (isValid) {
      setStep(step + 1)
    } else {
      setErrors(newErrors)
    }

  }

  const handlePreviousStep = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }
  const handleNextStep = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handleInputChange = (e) => {
    setFormData({
     ...formData,
      [e.target.name]: e.target.value
    })
  }

  console.log(formData)
  console.log(errors)

  if (step === 1) {
    return (
      <div className="bg-gray-200 p-12">
        <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder='Joe' onChange={handleInputChange} value={formData.name} />
            {errors.name && <p className="text-red-500 mb-2text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-gray-800 mb-1">Surname</label>
            <input type="text" id="surname" name="surname" className="w-full p-2 border border-gray-300 rounded" placeholder='Doe' onChange={handleInputChange} value={formData.surname} />
            {errors.surname && <p className="text-red-500 mb-2text-sm">{errors.surname}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 mb-1">Email Address</label>
            <input type="text" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" placeholder='example@email.com' onChange={handleInputChange} value={formData.email} />
            {errors.email && <p className="text-red-500 mb-2text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-800 mb-1">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded" placeholder='+00 123456789' onChange={handleInputChange} value={formData.phone} />
            {errors.phone && <p className="text-red-500 mb-2text-sm">{errors.phone}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">Next Step</button>
        </form>
      </div>
    )
  } else if (step === 2) {
    return (
      <div className="bg-gray-200 p-12">
        <h2 className="text-2xl font-bold mb-4">Step 2: Financial Information</h2>
        <form onSubmit={handleSubmit2}>
          <div className="mb-4">
            <label htmlFor="salary" className="block text-gray-800 mb-1">Salary $</label>
            <input type="number" id="salary" name="salary" className="w-full p-2 border border-gray-300 rounded" placeholder='Please type in your monthly salary' onChange={handleInputChange} value={formData.salary} />
            {errors.salary && <p className="text-red-500 mb-2text-sm">{errors.salary}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="monthlyExpenses" className="block text-gray-800 mb-1">Monthly Expenses $</label>
            <input type="number" id="monthlyExpenses" name="monthlyExpenses" className="w-full p-2 border border-gray-300 rounded" placeholder='Please type in your monthly expenses' onChange={handleInputChange} value={formData.monthlyExpenses} />
            {errors.monthlyExpenses && <p className="text-red-500 mb-2text-sm">{errors.monthlyExpenses}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="timeInCurrentJob" className="block text-gray-800 mb-1">How many months have you been in your current job?</label>
            <input type="number" id="timeInCurrentJob" name="timeInCurrentJob" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} value={formData.timeInCurrentJob}/>
            {errors.timeInCurrentJob && <p className="text-red-500 mb-2text-sm">{errors.timeInCurrentJob}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">Next Step</button>
          <button type="button" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200" onClick={handlePreviousStep}>Previous Step</button>
        </form>
      </div>
    )
  } else if (step === 3) {
    return (
      <div className="bg-gray-200 p-12">
        <h2 className="text-2xl font-bold mb-4">Step 3: Payment Information</h2>
        <form onSubmit={handleSubmit3}>
          <div className="mb-4">
            <label htmlFor="paymentDuration" className="block text-gray-800 mb-1">Howmany months do you want to pay?</label>
            <input type="number" id="paymentDuration" name="paymentDuration" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} value={formData.paymentDuration} />
            {errors.paymentDuration && <p className="text-red-500 mb-2text-sm">{errors.paymentDuration}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200" onClick={handleNextStep}>Finish</button>
          <button type="button" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200" onClick={handlePreviousStep}>Previous Step</button>
        </form>
      </div>
    )
  } else if (step === 4) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
        <div className="flex items=center flex-col justify-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold mb-4 text-center">Success</h2>
          <p className="text-gray-800 mb-8 text-center">Based on your request, we have a special offer for you!</p>
          <button type="button" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">Show Me</button>
        </div>
      </div>
    )
  }
}

export default PersonalForm
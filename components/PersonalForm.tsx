"use client";
import React, { useState } from 'react'

const FormSection = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handlePreviousStep = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  const handleInputChange = (e) => {
    setFormData({
     ...formData,
      [e.target.name]: e.target.value
    })
  }

  console.log(formData)

  if (step === 1) {
    return (
      <div className="bg-gray-200 p-12">
        <h2 className="text-2xl font-bold mb-4">Step 1: Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-gray-800 mb-1">Surname</label>
            (123) 456-7890
            <input type="text" id="surname" name="surname" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 mb-1">Email Address</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-800 mb-1">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">Next Step</button>
        </form>
      </div>
    )
  } else if (step === 2) {
    return (
      <div className="bg-gray-200 p-12">
        <h2 className="text-2xl font-bold mb-4">Step 2: Financial Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="salary" className="block text-gray-800 mb-1">Salary</label>
            <input type="number" id="salary" name="salary" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="monthlyExpenses" className="block text-gray-800 mb-1">Monthly Expenses</label>
            <input type="number" id="monthlyExpenses" name="monthlyExpenses" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="timeInCurrentJob" className="block text-gray-800 mb-1">How many months have you been in your current job?</label>
            <input type="number" id="timeInCurrentJob" name="timeInCurrentJob" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="paymentDuration" className="block text-gray-800 mb-1">Howmany months do you want to pay?</label>
            <input type="number" id="paymentDuration" name="paymentDuration" className="w-full p-2 border border-gray-300 rounded" onChange={handleInputChange} />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200">Finish</button>
          <button type="button" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-200" onClick={handlePreviousStep}>Previous Step</button>
        </form>
      </div>
    )
  }
}

export default FormSection
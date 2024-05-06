"use client";
import React from 'react';
import FormDataContext from './FormDataContext';

const OfferHero = () => {
    const formData = React.useContext(FormDataContext)
    console.log(formData)
  return (
    <div>test</div>
  )
}

export default OfferHero
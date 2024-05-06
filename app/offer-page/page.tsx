"use client";
import { FormDataProvider } from "@/components/FormDataContext";
import OfferHero from "@/components/OfferHero";
import React from "react";
import { useState } from "react";


export default function Home() {
    const [formData, setFormData] = useState({})
  return (
    <div className="p-5 sm:px-10 md:px=20">
        <FormDataProvider value={formData}>
        <OfferHero />
        </FormDataProvider>
    </div>
  );
}
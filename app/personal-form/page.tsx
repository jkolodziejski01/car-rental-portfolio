"use client";
import PersonalForm from "@/components/PersonalForm";
import { FormDataProvider } from "@/components/FormDataContext";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({})
  return (
    <div className="p-5 sm:px-10 md:px=20">
       <FormDataProvider value={formData}>
      <PersonalForm />
    </FormDataProvider>
    </div>
  );
}
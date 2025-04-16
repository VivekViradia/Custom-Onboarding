'use client'

import { useState } from "react";
import AboutMeForm from "./form/AboutMeForm";
import AddressForm from "./form/AddressForm";
import BirthdateForm from "./form/BirthdateForm";
import Stepper from "./Stepper";
import EmailPasswordForm from "./form/EmailPasswordForm";
import { FormComponentType, IAdminConfig, IUserData } from "@/types/type";

interface Props {
  config: IAdminConfig;
}

export default function Wizard({ config }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<IUserData>({ email: "", password: "" });

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const updateField = (key: keyof IUserData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const renderComponents = (components: FormComponentType[]) => {
    return components.map((comp) => {
      switch (comp) {
        case "aboutMe":
          return <AboutMeForm key="aboutMe" value={formData.aboutMe || ""} onChange={(val) => updateField("aboutMe", val)} />;
        case "address":
          return (
            <AddressForm
              key="address"
              value={formData.address || { street: "", city: "", state: "", zip: "" }}
              onChange={(val) => updateField("address", val)}
            />
          );
        case "birthdate":
          return <BirthdateForm key="birthdate" value={formData.birthdate || ""} onChange={(val) => updateField("birthdate", val)} />;
      }
    });
  };

  return (
    <div>
      <Stepper currentStep={step} totalSteps={3} />
      <div className="mt-4">
        {step === 1 && (
          <EmailPasswordForm data={formData} onChange={updateField} onNext={handleNext} />
        )}
        {step === 2 && (
          <>
            {renderComponents(config.step2)}
            <div className="flex justify-between mt-4">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            {renderComponents(config.step3)}
            <div className="flex justify-between mt-4">
              <button onClick={handleBack}>Back</button>
              <button onClick={() => console.log("Submit", formData)}>Submit</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

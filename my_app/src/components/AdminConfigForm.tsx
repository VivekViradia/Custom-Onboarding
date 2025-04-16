"use client";

import { FormComponentType, IAdminConfig } from "../types/type";
import { useState } from "react";

const ALL_COMPONENTS: FormComponentType[] = ["aboutMe", "address", "birthdate"];

interface Props {
  config: IAdminConfig;
  onSave: (cfg: IAdminConfig) => void;
  saving: boolean;
}

export default function AdminConfigForm({ config, onSave, saving }: Props) {
  const [step2, setStep2] = useState<FormComponentType[]>(config.step2);
  const [step3, setStep3] = useState<FormComponentType[]>(config.step3);

  const toggleComponent = (component: FormComponentType, step: 2 | 3) => {
    const currentStep = step === 2 ? step2 : step3;
    const isIn = currentStep.includes(component);

    let updated = isIn
      ? currentStep.filter((c) => c !== component)
      : [...currentStep, component];

    if (step === 2) setStep2(updated);
    else setStep3(updated);
  };

  const handleSave = () => {
    if (step2.length === 0 || step3.length === 0) {
      alert("Each step must have at least one component.");
      return;
    }
    onSave({ step2, step3 });
  };

  const isSelected = (step: 2 | 3, comp: FormComponentType) =>
    (step === 2 ? step2 : step3).includes(comp);

  const labelMap = {
    aboutMe: "About Me",
    address: "Address",
    birthdate: "Birthdate",
  };

  return (
    <div className="space-y-6">
      {[2, 3].map((step) => (
        <div key={step}>
          <h2 className="font-semibold mb-2">Step {step}</h2>
          <div className="flex flex-col gap-2">
            {ALL_COMPONENTS.map((comp) => (
              <label key={`${step}-${comp}`} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isSelected(step as 2 | 3, comp)}
                  onChange={() => toggleComponent(comp, step as 2 | 3)}
                />
                {labelMap[comp]}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
        disabled={saving}
      >
        {saving ? "Saving..." : "Save Configuration"}
      </button>
    </div>
  );
}

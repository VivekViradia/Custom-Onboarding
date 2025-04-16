
interface StepperProps {
    currentStep: number;
    totalSteps: number;
  }
  
  export default function Stepper({ currentStep, totalSteps }: StepperProps) {
    return (
      <div className="flex items-center justify-center gap-4 mb-6">
        {Array.from({ length: totalSteps }, (_, idx) => {
          const step = idx + 1;
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;
  
          return (
            <div
              key={step}
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2
                ${isCompleted ? "bg-green-500 text-white border-green-500" :
                  isActive ? "bg-blue-600 text-white border-blue-600" :
                  "bg-white text-gray-600 border-gray-300"}
              `}
            >
              {step}
            </div>
          );
        })}
      </div>
    );
  }
  
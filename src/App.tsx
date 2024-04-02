import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    gender: '',
    phoneNumberType: '',
    selectAnything: '',
    selectRadio: '',
    consent: false,
    businessActivityGroup: '',
    additionalInputFields: [''],
    birthDate: '',
    language: '',
    email: '',
    file: null,
    code: '',
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (name: string, value: string | boolean | string[] | File | null) => {
    setFormData({ ...formData, [name]: value });
  };


  const finish = () => {
    console.log('Finishing the step');
    // Implement the logic to handle finishing the step
  };

  return (
    <div className="w-[1440px] h-[1339px] p-10 gap-6 rounded-[20px] shadow-md font-poppins items-center">
      <div className="p-8 gap-3 bg-green-100 rounded-[20px]">
        <div className="text-2xl font-semibold text-gray-800">System Configurations Settings</div>
        <div className="text-sm font-normal text-gray-600">Please Provide the Required Details and complete all the steps</div>
      </div>

      <div className="stepper flex justify-between p-5 gap-10">
        <div className="step-container items-center gap-5 cursor-pointer" onClick={() => setStep(1)}>
        <div className={`step text-lg font-semibold text-center ${step >= 1 ? 'text-green-500' : 'text-gray-500'}`}>Step 1 Name</div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer items-center"
          >
            <circle cx="15" cy="15" r="14.5" fill="#707070" />
            <circle cx="15" cy="15" r="8.5" fill={step >= 1 ? '#3CC055' : 'white'} />
          </svg>
        </div>
        <div className="step-container items-center gap-5 cursor-pointer" onClick={() => setStep(2)}>
          <div className={`step text-lg font-semibold text-center ${step >= 2 ? 'text-green-500' : 'text-gray-500'}`}>Step 2 Detail</div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <circle cx="15" cy="15" r="14.5" fill="#707070" />
            <circle cx="15" cy="15" r="8.5" fill={step >= 2 ? '#3CC055' : 'white'} />
          </svg>
        </div>
        <div className="step-container items-center gap-5 cursor-pointer" onClick={() => setStep(3)}>
          <div className={`step text-lg font-semibold text-center ${step >= 3 ? 'text-green-500' : 'text-gray-500'}`}>Step 3 Finish</div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <circle cx="15" cy="15" r="14.5" fill="#707070" />
            <circle cx="15" cy="15" r="8.5" fill={step >= 3 ? '#3CC055' : 'white'} />
          </svg>
        </div>
      </div>

      {step === 1 && (
        <>
          <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />
        </>
      )}
      {step === 2 && (
        <>
          <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        </>
      )}
      {step === 3 && (
        <>
          <Step3 formData={formData} handleChange={handleChange} prevStep={prevStep} finish={finish} />
        </>
      )}
    </div>
  );
};

export default App;

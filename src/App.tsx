import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import "./App.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    gender: '',
    phoneNumberType: '',
    selectAnything: '',
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

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you can implement the logic to send formData to Xano backend
  };

  const finish = () => {
    console.log('Finishing the step');
    // Implement the logic to handle finishing the step
  };

  return (
    <div className="step1-container">
      <div className="header">
        <div className="header-one">System Configurations Settings </div>
        <div className="header-two">Please Provide the Required Details and complete all the steps</div>
        </div>

      <div className="stepper">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: 'pointer' }}
        onClick={() => setStep(1)}
      >
        <circle cx="15" cy="15" r="14.5" fill="#707070" />
        <circle cx="15" cy="15" r="8.5" fill={step >= 1 ? '#3CC055' : 'white'} />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: 'pointer', marginLeft: '50px', marginRight: '50px' }}
        onClick={() => setStep(2)}
      >
        <circle cx="15" cy="15" r="14.5" fill="#707070" />
        <circle cx="15" cy="15" r="8.5" fill={step >= 2 ? '#3CC055' : 'white'} />
      </svg>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: 'pointer' }}
        onClick={() => setStep(3)}
      >
        <circle cx="15" cy="15" r="14.5" fill="#707070" />
        <circle cx="15" cy="15" r="8.5" fill={step >= 3 ? '#3CC055' : 'white'} />
      </svg>
      </div>
        
      {step === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} finish={finish} />}
    </div>
  );
};

export default App;

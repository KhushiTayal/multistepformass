// Step1.tsx
import React from 'react';
import StepperButtons from './StepperButtons';

interface Step1Props {
  formData: {
    fullName: string;
    phoneNumber: string;
    gender: string;
    phoneNumberType: string;
    selectAnything: string;
    consent: boolean;
    businessActivityGroup: string;
    additionalInputFields: string[];
    // nextStep: () => void;
  };
  handleChange: (name: string, value: string | boolean | string[]) => void;
  nextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, nextStep }) => {
  const { fullName, phoneNumber, gender, phoneNumberType, selectAnything, consent, businessActivityGroup, additionalInputFields } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
    console.log(businessActivityGroup);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    handleChange(name, checked);
  };

  const handleAddInputField = () => {
    handleChange('additionalInputFields', [...additionalInputFields, '']);
  };

  const handleInputFieldChange = (index: number, value: string) => {
    const updatedFields = [...additionalInputFields];
    updatedFields[index] = value;
    handleChange('additionalInputFields', updatedFields);
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  const handleRadioClick = (value: string) => {
    handleChange('selectAnything', value);
  };

  return (
    <form onSubmit={handleNext} className="w-[1320px] h-[1035px] p-10 gap-6 bg-white rounded-20 shadow-md flex flex-col items-center">
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-6 w-[964px] h-[111px]">
          <div>
            <label htmlFor="fullName" className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Enter your Full name</label>
            <input
  type="text"
  name="fullName"
  id="fullName"
  value={fullName}
  onChange={handleInputChange}
  className="w-[452px] h-[45px] p-[12px 16px 12px 16px] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 bg-white"
  placeholder="Enter here"
/>

<div className="flex w-[233px] h-[18px] gap-2">
        <svg className="mt-[3px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="text-xs font-normal leading-6 text-gray-500">Enter the First Name and Last name</span>
        </div>

          </div>
          <div>
            <label htmlFor="phoneNumber" className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Enter Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
              className="w-[452px] h-[45px] p-[12px 16px 12px 16px] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 bg-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 w-[964px] h-[113px]">
          <div className="flex flex-col space-y-2">
            <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Gender</span>
            <span className="text-gray-500">Select one of them</span>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span>Female</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Prefer not to say"
                  checked={gender === 'Prefer not to say'}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-blue-600"
                />
                <span>Prefer not to say</span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="phoneNumberType" className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Phone Number Type</label>
            <select
              name="phoneNumberType"
              id="phoneNumberType"
              value={phoneNumberType}
              onChange={handleInputChange}
              className="w-[452px] h-[45px] p-[12px 16px 12px 16px] border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 bg-white"
            >
              <option value="Mobile">Select from the here</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
            </select>
          </div>
        </div>
        {/* Select Anything */}
        <div className="flex flex-col space-y-2 w-[1280px] h-[177px]">
  <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Select Anything</span>
  <span className="text-gray-500">lorem loe lorem lorem lorem</span>
  <div className="grid grid-cols-3 gap-4">
  {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].map(option => (
    <div key={option} className={`flex items-center justify-between p-2 border rounded-md cursor-pointer ${selectAnything === option ? 'bg-green-100 border-green-500' : 'border-gray-300'}`} onClick={() => handleRadioClick(option)}>
      <span>{option}</span>
      <input
        type="radio"
        name="selectAnything"
        value={option}
        checked={selectAnything === option}
        onChange={() => {}}
        className="form-radio h-4 w-4 text-blue-600"
      />
    </div>
  ))}
</div>

</div>

        {/* Consent */}
        <div className="items-center space-x-2 w-[1280px] h-[84px] gap-[8px]">
        <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Consent</span>
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            onChange={handleCheckboxChange}
            className="form-checkbox h-4 w-4 text-blue-600 mt-[5px]"
          />
          <label htmlFor="consent" className="text-gray-700">The Information provided above is correct & would like to get call from a sales advisor.</label>
        </div>
        <div className="flex flex-col space-y-4 w-[804px] h-[111px]">
          <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Please select your business activity group</span>
          <span className="text-gray-500">Add more fields if you want</span>
          {additionalInputFields.map((value, index) => (
            <div key={index} className="flex gap-4">
              <input
                type="text"
                value={value}
                onChange={(e) => handleInputFieldChange(index, e.target.value)}
                className="w-[730px] h-[45px] p-[12px 16px 12px 16px] gap-0 border-[1px] border-gray-300 rounded-[4px] focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 bg-white"
                placeholder={`Field ${index + 1}`}
              />
              {index === additionalInputFields.length - 1 && (
                <svg
                onClick={handleAddInputField}
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <circle cx="14" cy="14" r="13" stroke="#3F7CF1" strokeWidth="3" fill="none" />
                <path
                  d="M11 14H17M14 11V17"
                  stroke="#3F7CF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>            
              )}
            </div>
          ))}
          <div className="flex w-[233px] h-[18px] gap-2">
        <svg className="mt-[3px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="text-xs font-normal leading-6 text-gray-500">Array of text</span>
        </div>
        </div>
        <div className="flex justify-end w-[1280px] h-[48px] gap-[40px]">
          <StepperButtons step={1} nextStep={nextStep} prevStep={()=>{}} finish={()=>{}}/>
        </div>
        
      </div>
    </form>
  );
};

export default Step1;

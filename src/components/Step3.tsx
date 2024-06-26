import React, { useState } from 'react';
import StepperButtons from './StepperButtons';
import ToggleSwitch from './ToggleSwitch';

interface Step3Props {
  formData: {
    code: string;
    selectRadio: string;
  };
  prevStep: () => void;
  finish: () => void;
  handleChange: (name: string, value: string | boolean | string[], index: number) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleChange, prevStep, finish }) => {
  const {selectRadio } = formData;

  const [additionalDivs, setAdditionalDivs] = useState<number>(0);

  const handleAddDiv = () => {
    setAdditionalDivs(additionalDivs + 1);
  };

  const [formDataState, setFormData] = useState<Step3Props['formData']>(formData);

  const handleRadioClick = (value: string, index: number) => {
    const updatedFormData = {
      ...formDataState,
      selectRadio: value
    };
    handleChange(`selectRadio`, value, index);
    setFormData(updatedFormData);
  };
  

  return (
    <div className="w-[1320px] h-[1035px] p-10 gap-6 bg-white rounded-20 shadow-md flex flex-col">

      {/* Existing Div */}
      <div className="flex flex-col grid grid-cols-2 w-[1280px] h-[24px] gap-[80px]">
        {/* Toggle option */}
        <div className="flex w-[263px] h-[24px] justify-between">
          <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Toggle the option</span>
          <ToggleSwitch />
        </div>
        {/* Copy link */}
        <div className="flex w-[312px] h-[24px] justify-between">
          <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">Copy this Link</span>
          <span className="block font-medium text-green-700 font-poppins text-base font-semibold leading-6 text-left">#222242jdjsdj4</span>
          <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_122)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V15C24 15.7956 23.6839 16.5587 23.1213 17.1213C22.5587 17.6839 21.7956 18 21 18H9C8.20435 18 7.44129 17.6839 6.87868 17.1213C6.31607 16.5587 6 15.7956 6 15V3ZM9 1.5C8.60218 1.5 8.22064 1.65804 7.93934 1.93934C7.65804 2.22064 7.5 2.60218 7.5 3V15C7.5 15.3978 7.65804 15.7794 7.93934 16.0607C8.22064 16.342 8.60218 16.5 9 16.5H21C21.3978 16.5 21.7794 16.342 22.0607 16.0607C22.342 15.7794 22.5 15.3978 22.5 15V3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5H9ZM3 7.5C2.60218 7.5 2.22064 7.65804 1.93934 7.93934C1.65804 8.22064 1.5 8.60218 1.5 9V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H15C15.3978 22.5 15.7794 22.342 16.0607 22.0607C16.342 21.7794 16.5 21.3978 16.5 21V19.5H18V21C18 21.7956 17.6839 22.5587 17.1213 23.1213C16.5587 23.6839 15.7956 24 15 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V9C0 8.20435 0.316071 7.44129 0.87868 6.87868C1.44129 6.31607 2.20435 6 3 6H4.5V7.5H3Z" fill="#757575"/>
</g>
<defs>
<clipPath id="clip0_1_122">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
      </div>

      {/* Select Anything Divs */}
      <div className="flex flex-col space-y-2">
        <span className="block font-medium text-gray-700 font-poppins text-base font-semibold leading-6 text-left">This is div - Select Radio btn and add the radio btn </span>
        <span className="font-poppins text-base font-normal text-left text-gray-400">lorem loe lorem lorem lorem</span>

        {/* Render additional divs based on state */}
        {[...Array(additionalDivs + 1)].map((_, index) => (
          <div key={index}>
            {index > 0 && <><span className="block font-poppins text-base font-semibold text-gray-400 leading-6 pt-[20px]">ADDED This is container - Select Radio btn and add the radio btn </span> <span className="font-poppins text-base font-normal text-left text-gray-400">lorem loe lorem lorem lorem</span></>}
            <div className="grid grid-cols-3 gap-4">
            {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].map((option, optionIndex) => (
  <div key={option} className={`flex items-center justify-between p-2 border rounded-md cursor-pointer ${formData.selectRadio === option ? 'bg-green-100 border-green-500' : 'border-gray-300'}`} onClick={() => handleRadioClick(option, optionIndex)}>
  <span>{option}</span>
      <input
        type="radio"
        name={`selectRadio-${optionIndex}`}
        value={option}
        checked={selectRadio === option}
        onChange={() => {}}
        className="form-radio h-4 w-4 text-blue-600 pt-[12px] pr-[16px] pb-[12px] pl-[16px]"
      />
    </div>
  ))}
            </div>
          </div>
        ))}

        {/* Button to add one more div */}
        <button className="w-[125px] h-[34px] px-5 py-2 gap-10 rounded-[8px] bg-gray-400 text-white" onClick={handleAddDiv}>Add whole div</button>
      </div>

      {/* Stepper Buttons */}
      <div className="flex justify-end w-[1280px] h-[48px] gap-[40px]">
        <StepperButtons step={3} prevStep={prevStep} nextStep={()=>{}} finish={finish} />
      </div>
    </div>
  );
};

export default Step3;

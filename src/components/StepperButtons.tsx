import React from 'react';

interface StepperButtonsProps {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
  finish: () => void;
}

const StepperButtons: React.FC<StepperButtonsProps> = ({ step, prevStep, nextStep, finish }) => {
  switch (step) {
    case 1:
      return (
        <div>
          <button className="w-[106px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-white border border-[#22A785] text-[#22A785] mr-[40px]" onClick={prevStep}>Cancel</button>
          <button className="w-[124px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-[#22A785] text-white mr-[40px]" onClick={nextStep}>Next Step</button>
        </div>
      );
    case 2:
      return (
        <div>
          <button className="w-[106px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-white text-[#22A785] mr-[40px]" onClick={prevStep}>Cancel</button>
          <button className="w-[157px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-white border border-[#22A785] text-[#22A785] mr-[40px]"onClick={prevStep}>Previous Step</button>
          <button className="w-[124px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-[#22A785] text-white mr-[40px]" onClick={nextStep}>Next Step</button>
        </div>
      );
    case 3:
      return (
        <div>
          <button className="w-[106px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-white text-[#22A785] mr-[40px]" onClick={prevStep}>Cancel</button>
          <button className="w-[157px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-white border border-[#22A785] text-[#22A785] mr-[40px]" onClick={prevStep}>Previous Step</button>
          <button className="w-[124px] h-[48px] px-[24px] py-[12px] gap-10 rounded-[8px] bg-[#22A785] text-white mr-[40px]" onClick={finish}>Finish</button>
        </div>
      );
    default:
      return null;
  }
};

export default StepperButtons;

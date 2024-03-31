import React, { useState } from 'react';
import "./Step3.css";

interface Step3Props {
  formData: {
    code: string;
  };
  prevStep: () => void;
  finish: () => void;
  handleSubmit: () => void; // Define handleSubmit in Step3Props
}

const Step3: React.FC<Step3Props> = ({ formData, prevStep, finish }) => {
  //const { code } = formData;

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    console.log(formData);
  };

  return (
    <div className="step3-container">
      {/* <div className="header">
        <div className="header-one">System Configurations Settings</div>
        <div className="header-two">Please Provide the Required Details and complete all the steps</div>
      </div> */}

      <div className="toggle-copycode">
        <div className="toggle-one">
      <span className="step1-label">Toggle the option</span>
      <button onClick={handleToggle} style={{ backgroundColor: isToggled ? 'white' : 'black' }}>
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0H15C15.9193 -1.36979e-08 16.8295 0.18106 17.6788 0.532843C18.5281 0.884626 19.2997 1.40024 19.9497 2.05025C20.5998 2.70026 21.1154 3.47194 21.4672 4.32122C21.8189 5.17049 22 6.08075 22 7C22 7.91925 21.8189 8.8295 21.4672 9.67878C21.1154 10.5281 20.5998 11.2997 19.9497 11.9497C19.2997 12.5998 18.5281 13.1154 17.6788 13.4672C16.8295 13.8189 15.9193 14 15 14H7C6.08075 14 5.1705 13.8189 4.32122 13.4672C3.47194 13.1154 2.70026 12.5998 2.05025 11.9497C1.40024 11.2997 0.884626 10.5281 0.532843 9.67878C0.18106 8.8295 0 7.91925 0 7C0 6.08075 0.18106 5.17049 0.532843 4.32122C0.884626 3.47194 1.40024 2.70026 2.05025 2.05025C2.70026 1.40024 3.47194 0.884626 4.32122 0.532843C5.1705 0.18106 6.08075 -1.36979e-08 7 0ZM15 10C15.7956 10 16.5587 9.68393 17.1213 9.12132C17.6839 8.55871 18 7.79565 18 7C18 6.20435 17.6839 5.44129 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4C14.2044 4 13.4413 4.31607 12.8787 4.87868C12.3161 5.44129 12 6.20435 12 7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10Z" fill="#757575"/>
        </svg>
      </button>
      </div>
      <div className="toggle-two">
      <span className="step1-label">Copy this Link</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      <div className="select-anything-container">
  <span className="step1-label">This is div - Select Radio btn and add the radio btn</span>
  <span className="span-two">lorem loe lorem lorem lorem</span>
  <div className="select">
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 1</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 1"
          className="select-radio-input w-6 h-6"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 2</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 2"
          className="select-radio-input"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 3</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 3"
          className="select-radio-input"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 4</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 4"
          className="select-radio-input"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 5</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 5"
          className="select-radio-input"
        />
      </div>
    </div>
</div>

<div className="select-anything-container">
  <span className="step1-label">ADDED This is container - Select Radio btn</span>
  <span className="span-two">lorem loe lorem lorem lorem</span>
  <div className="select">
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 1</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 1"
          className="select-radio-input w-6 h-6"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 2</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 2"
          className="select-radio-input"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 3</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 3"
          className="select-radio-input"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 4</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 4"
          className="select-radio-input"
        />
      </div>
      <div className="sub-select-anything-container flex items-center">
        <div className="mr-2">
          <label className="select-radio-label">Option 5</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 5"
          className="select-radio-input"
        />
      </div>
    </div>
</div>

<button className="add-buttn">Add whole div</button>
      <div className="buttons">
        <button className="cancel-button" onClick={prevStep}>
          Cancel
        </button>
        <button className="previous-button" onClick={prevStep}>
          Previous Step
        </button>
        <button className="next-button" onClick={finish}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default Step3;

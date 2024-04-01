
// Step1.tsx
import React from 'react';
import './Step1.css';

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
    //setFormData({ ...formData, selectAnything: value });
    handleChange('selectAnything', value);
  };

  return (
    <form onSubmit={handleNext} className="step1-container">
        {/* <div className="header">
        <div className="header-one">System Configurations Settings </div>
        <div className="header-two">Please Provide the Required Details and complete all the steps</div>
        </div> */}
    <div className="name-contact-container">
      <div className="mb-4">
        <label className="step1-label" htmlFor="fullName">
        Enter your Full name
        </label>
        <input
          className="step1-input"
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Enter here"
          value={fullName}
          onChange={handleInputChange}
        />
        <div className="span-name-div">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="span-name">Enter the First Name and Last name</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="step1-label" htmlFor="phoneNumber">
        Enter Phone number
        </label>
        <input
          className="step1-input"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div className="name-contact-gender">
      <div className="mb-4">
        <span className="step1-label">Gender</span>
        <span className="span-two">Select one of them</span>
        <div className="gender-buttns">
          <label className="step1-radio-label">
            <input
              className="step1-radio-input"
              type="radio"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label className="step1-radio-label">
            <input
              className="step1-radio-input"
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={handleInputChange}
            />
            Female
          </label>
          <label className="step1-radio-label">
            <input
              className="step1-radio-input"
              type="radio"
              name="gender"
              value="Prefer not to say"
              checked={gender === 'Prefer not to say'}
              onChange={handleInputChange}
            />
            Prefer not to say
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="step1-label" htmlFor="phoneNumberType">
          Phone Number Type
        </label>
        <select
          className="step1-input"
          name="phoneNumberType"
          id="phoneNumberType"
          value={phoneNumberType}
          onChange={handleInputChange}
        >
          <option value="Mobile">Select from the here</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>
      </div>
      </div>
      
      <div className="select-anything-container">
  <span className="step1-label">Select Anything</span>
  <span className="span-two">lorem loe lorem lorem lorem</span>
  <div className="select">
      <div className={`sub-select-anything-container flex items-center ${
            selectAnything === 'Option 1' ? 'selected' : ''
          }`}
          onClick={() => handleRadioClick('Option 1')}>
        <div className="mr-2">
          <label className="select-radio-label">Option 1</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 1"
          checked={selectAnything === 'Option 1'}
          onChange={handleInputChange}
          className="select-radio-input w-12 h-12"
        />
      </div>
      <div className={`sub-select-anything-container flex items-center ${
            selectAnything === 'Option 2' ? 'selected' : ''
          }`}
          onClick={() => handleRadioClick('Option 2')}>
        <div className="mr-2">
          <label className="select-radio-label">Option 2</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 2"
          checked={selectAnything === 'Option 2'}
          onChange={handleInputChange}
          className="select-radio-input"
        />
      </div>
      <div className={`sub-select-anything-container flex items-center ${
            selectAnything === 'Option 3' ? 'selected' : ''
          }`}
          onClick={() => handleRadioClick('Option 3')}>
        <div className="mr-2">
          <label className="select-radio-label">Option 3</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 3"
          checked={selectAnything === 'Option 3'}
          onChange={handleInputChange}
          className="select-radio-input"
        />
      </div>
      <div className={`sub-select-anything-container flex items-center ${
            selectAnything === 'Option 4' ? 'selected' : ''
          }`}
          onClick={() => handleRadioClick('Option 4')}>
        <div className="mr-2">
          <label className="select-radio-label">Option 4</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 4"
          checked={formData.selectAnything === 'Option 4'}
          onChange={() => {}}
          className="select-radio-input"
        />
      </div>
      <div className={`sub-select-anything-container flex items-center ${
            selectAnything === 'Option 5' ? 'selected' : ''
          }`}
          onClick={() => handleRadioClick('Option 5')}>
        <div className="mr-2">
          <label className="select-radio-label">Option 5</label>
        </div>
        <input
          type="radio"
          name="selectAnything"
          value="Option 5"
          checked={selectAnything === 'Option 5'}
          onChange={handleInputChange}
          className="select-radio-input"
        />
      </div>
    </div>


</div>

      <div className="consent">
        <label className="step1-label">Consent:</label>
        <label className="consent-text">
          <input
            type="checkbox"
            name="consent"
            checked={consent}
            className="consent-box"
            onChange={handleCheckboxChange}
          />
          The Information provided above is correct & would like to get call from a sales advisor.
        </label>
      </div>



      <div className="business-main">
      <div className="business-activity">
      <div className="business-text">
        <label className="step1-label" htmlFor="businessActivityGroup">
        Please select your business activity group
        </label>
      </div>
      
        {additionalInputFields.map((field, index) => (
          <div key={index}>
            <input
            className="business-input"
              type="text"
              value={field}
              onChange={(e) => handleInputFieldChange(index, e.target.value)}
            />
          </div>
        ))}
        <div className="span-name-div">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="span-name">Array of text</span>
        </div>
      </div>
      <div className="plus-svg">
      <svg width="28" height="29" onClick={handleAddInputField} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4 13.1H21V15.9H15.4V21.5H12.6V15.9H7V13.1H12.6V7.5H15.4V13.1ZM14 28.5C10.287 28.5 6.72601 27.025 4.1005 24.3995C1.475 21.774 0 18.213 0 14.5C0 10.787 1.475 7.22601 4.1005 4.6005C6.72601 1.975 10.287 0.5 14 0.5C17.713 0.5 21.274 1.975 23.8995 4.6005C26.525 7.22601 28 10.787 28 14.5C28 18.213 26.525 21.774 23.8995 24.3995C21.274 27.025 17.713 28.5 14 28.5ZM14 25.7C16.9704 25.7 19.8192 24.52 21.9196 22.4196C24.02 20.3192 25.2 17.4704 25.2 14.5C25.2 11.5296 24.02 8.68081 21.9196 6.5804C19.8192 4.48 16.9704 3.3 14 3.3C11.0296 3.3 8.18081 4.48 6.0804 6.5804C3.98 8.68081 2.8 11.5296 2.8 14.5C2.8 17.4704 3.98 20.3192 6.0804 22.4196C8.18081 24.52 11.0296 25.7 14 25.7Z" fill="#3F7CF1"/>
</svg>
</div>
      </div>
      <div className="buttons">
      <button type="button" className="cancel-button">
          Cancel
        </button>
        <button className="next-button" type="submit">
          Next Step
        </button>
      </div>
    </form>
  );
};
export default Step1;

import React from 'react';
import "./Step2.css";

interface Step2Props {
  formData: {
    birthDate: string;
    language: string;
    email: string;
    file: File | null;
  };
  handleChange: (name: string, value: string | File) => void;
  prevStep: () => void;
  nextStep: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange, prevStep, nextStep }) => {
  const { birthDate, language, email } = formData;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleChange('file', file);
    }
  };

  return (
    <div className="step2-container">
      {/* <div className="header">
        <div className="header-one">System Configurations Settings </div>
        <div className="header-two">Please Provide the Required Details and complete all the steps</div>
        </div> */}

        <div className="birth-language">
        <div className="form-group">
          <label htmlFor="birthDate" className="step1-label">Enter the birth date *</label>
          <input
            type="date"
            id="birthDate"
            className="step1-input"
            value={birthDate}
            onChange={(e) => handleChange('birthDate', e.target.value)}
          />
          <div className="span-name-div">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="span-name">Enter the First Name and Last name</span>
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="language" className="step1-label">Language</label>
          <select
            id="language"
            value={language}
            onChange={(e) => handleChange('language', e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
          <div className="span-name-div">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="span-name">Search the language and select the option</span>
        </div>
        </div>
      </div>

      <div className="email-uploadfile">
      <div>
        <label className="step1-label">Enter the multiple mail*</label>
        <input
          type="email"
          value={email}
          className="email-input"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <input
          type="email"
          value={email}
          className="email-input"
          onChange={(e) => handleChange('email', e.target.value)}
        />
        <button className="add-buttn">Add</button>
      </div>
      <div className="span-name-div">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.33594 10.333H7.66927V6.33301H6.33594V10.333ZM7.0026 4.99967C7.19149 4.99967 7.34994 4.93567 7.47794 4.80767C7.60594 4.67967 7.66972 4.52145 7.66927 4.33301C7.66927 4.14412 7.60527 3.98567 7.47727 3.85767C7.34927 3.72967 7.19105 3.6659 7.0026 3.66634C6.81372 3.66634 6.65527 3.73034 6.52727 3.85834C6.39927 3.98634 6.33549 4.14456 6.33594 4.33301C6.33594 4.5219 6.39994 4.68034 6.52794 4.80834C6.65594 4.93634 6.81416 5.00012 7.0026 4.99967ZM7.0026 13.6663C6.08038 13.6663 5.21372 13.4912 4.4026 13.141C3.59149 12.7908 2.88594 12.3159 2.28594 11.7163C1.68594 11.1163 1.21105 10.4108 0.861271 9.59967C0.511493 8.78856 0.336382 7.9219 0.335938 6.99967C0.335938 6.07745 0.511049 5.21079 0.861271 4.39967C1.21149 3.58856 1.68638 2.88301 2.28594 2.28301C2.88594 1.68301 3.59149 1.20812 4.4026 0.858341C5.21372 0.508563 6.08038 0.333452 7.0026 0.333008C7.92483 0.333008 8.79149 0.508119 9.6026 0.858341C10.4137 1.20856 11.1193 1.68345 11.7193 2.28301C12.3193 2.88301 12.7944 3.58856 13.1446 4.39967C13.4948 5.21079 13.6697 6.07745 13.6693 6.99967C13.6693 7.9219 13.4942 8.78856 13.1439 9.59967C12.7937 10.4108 12.3188 11.1163 11.7193 11.7163C11.1193 12.3163 10.4137 12.7915 9.6026 13.1417C8.79149 13.4919 7.92483 13.6668 7.0026 13.6663ZM7.0026 12.333C8.49149 12.333 9.7526 11.8163 10.7859 10.783C11.8193 9.74967 12.3359 8.48856 12.3359 6.99967C12.3359 5.51079 11.8193 4.24967 10.7859 3.21634C9.7526 2.18301 8.49149 1.66634 7.0026 1.66634C5.51372 1.66634 4.2526 2.18301 3.21927 3.21634C2.18594 4.24967 1.66927 5.51079 1.66927 6.99967C1.66927 8.48856 2.18594 9.74967 3.21927 10.783C4.2526 11.8163 5.51372 12.333 7.0026 12.333Z" fill="#7D7D7D"/>
</svg>
        <span className="span-name">Array of fields</span>
        </div>

      <div>
        <label className="step1-label">Upload file</label>
        <input
          type="text"
          className="email-input"
          onChange={handleFileChange}
        />
      </div>
      </div>

      <div className="buttons">
      <button type="button" className="cancel-button">
          Cancel
        </button>
        <button
          type="button"
          className="previous-button"
          onClick={prevStep}
        >
          Previous Step
        </button>
        <button
          type="button"
          className="next-button"
          onClick={nextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;

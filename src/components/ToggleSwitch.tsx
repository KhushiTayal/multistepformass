import { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="toggle"
        className="sr-only"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor="toggle"
        className="toggle-label block w-[24px] h-[14px] bg-gray-500 rounded-full cursor-pointer"
      >
        <span
          className={`block w-[12px] h-[12px] pt-[2px] pl-[2px] bg-white rounded-full shadow-md transform duration-300 ease-in-out ${
            isChecked ? 'translate-x-3' : ''
          }`}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;

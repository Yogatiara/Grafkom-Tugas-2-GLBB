import React, { useState } from 'react';


export default function Slider(props) {

  const { maxValue, minValue, defaultValue, onChange, title, classNames, step } = props;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    onChange(event);
    setValue(event.target.value);
  }


  return (
    <div className={'mb-4 mt-2 mb-6 relative'}>
      <label for="default-range" class="block text-sm font-medium text-gray-900 dark:text-white mb-2">{title}</label>
      <input id="medium-range" min={minValue} max={maxValue} type="range" value={value}
        onChange={handleChange} step={step}
        class="absolute rotate-270 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    </div>
  )
}

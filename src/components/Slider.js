import React, {useState} from 'react';


export default function Slider(props) {

  const {maxValue, minValue, defaultValue, onChange, title} = props;
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    onChange(event);
    setValue(event.target.value);
  }


  return (
    <div className={'mt-2 mb-6 relative'}>  
        <label for="default-range" class="block text-sm font-medium text-gray-900 dark:text-white mb-2">{title}</label>
        <input min={minValue} max={maxValue} type="range" value={value}
            onChange={handleChange} 
        className="absolute rtl rotate-270 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
    </div>
  )
}

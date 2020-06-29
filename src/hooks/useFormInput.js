import {useState} from 'react';

const useFormInput = () => {
  const [value, setValue] = useState('');
  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;

import {useState} from 'react';

const useFormInput = ({initialValue}: {initialValue: string | number}) => {
  const [value, setValue] = useState(initialValue || '');
  // TODO : REMOVE ANY
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;

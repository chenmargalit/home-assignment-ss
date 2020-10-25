import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, values };
};

export default useForm;

import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); //create a field name correspond to e.target.name and modify its value
    //e.g. {...values, username:"example"} or {...values, email:"example"}
  };

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
  };
  return {
    onChange,
    onSubmit,
    values,
  };
};

import React from 'react';
import './formInput.css';
export const FormInput = (props) => {
  return (
    <div className='form-input'>
      {/* <label>{props.placeholder}</label> */}
      {/* //using userref might be better due to usestate would be constantly rerending the page with your data, not very stable or safe for form registration. ig its just unnessary with usestate  */}
      <input
        placeholder={props.placeholder}
        onChange={(e) => props.setState(e.target.value)}
      />
    </div>
  );
};

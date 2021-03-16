import React from 'react'
import './Button.css'
const Button = ({handleClick,children}) => {
  console.log(children);
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <div
      className={`button-wrapper ${
        isOperator(children) ? null : "operator"
      }`}
      onClick={()=>handleClick(children)}
    >
      {children}
    </div>
  );
};
export default Button
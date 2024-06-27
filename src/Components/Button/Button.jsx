import React from "react";
import s from './Button.module.css'

export default function Button({
  onClick = () => console.log("click"),
  type = "button",
  btnType = "primary",
  className = '',
  children,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${s.button_default} ${className}`}
    >
      {children}
    </button>
  );
}

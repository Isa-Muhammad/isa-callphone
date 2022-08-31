import React from "react";

import Spinner from "../ui/Spinner";

export const Button = (props) => {
  const { onClick, children, classes, type, disabled, isRequesting } = props;
  const buttonClasses = `button ${classes}`;
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {isRequesting ? <Spinner /> : children}
    </button>
  );
};

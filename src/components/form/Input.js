import React from "react";
import classNames from "classnames";
import { FormGroup } from "./FormGroup";

export const Input = (props) => {
  const {
    type,
    placeholder,
    classes,
    register,
    label,
    name,
    error,
    hasIcon,
    iconName,
    toogleIcon,
    value,
    maxLength,
    defaultValue,
    onChange,
    ref,
  } = props;

  const inputClasses = classNames(classes, { hasIcon });
  if (type === "hidden")
    return <input {...register(name)} value={value} type={type} />;
  return (
    <FormGroup>
      {label && <label htmlFor={name}>{label}</label>}
      {onChange ? (
        <input
          ref={ref || ""}
          maxLength={maxLength || ""}
          {...register(name)}
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          autoComplete="on"
          defaultValue={defaultValue || ""}
          onChange={onChange}
        />
      ) : (
        <input
          ref={ref || ""}
          maxLength={maxLength || ""}
          {...register(name)}
          className={inputClasses}
          type={type}
          placeholder={placeholder}
          autoComplete="on"
          defaultValue={defaultValue || ""}
        />
      )}

      {hasIcon && (
        <div
          onClick={toogleIcon}
          className="absolute top-4 right-5"
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          {iconName}
        </div>
      )}
      {error}
    </FormGroup>
  );
};

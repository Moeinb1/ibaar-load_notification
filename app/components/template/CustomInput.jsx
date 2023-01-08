import { CloseCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useEffect, useState } from "react";

const CustomInput = ({
  name,
  className,
  autoFocus = false,
  error,
  icon,
  title,
  placeholder,
  value,
  touched,
  textCenter,
  action,
  type,
  disabled,
  actionText,
  resetAble = true,
  onReset = () => {},
  wrapperClass,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (value) {
      setFocused(true);
    } else {
      setFocused(false);
    }
  }, [value]);

  return (
    <>
      <div
        className={`my-input-wrapper ${wrapperClass}`}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={async () => {
          if (value) {
            setFocused(true);
          } else {
            setFocused(false);
          }
        }}
      >
        <Input
          autoFocus={autoFocus}
          type={type}
          disabled={disabled}
          // inputMode={type === "number" ? "numeric" : "text"}
          autoComplete={"off"}
          name={name}
          value={value}
          id={name}
          placeholder={placeholder}
          className={`my-form-input  ${
            error && touched && "border-red-400 focus:border-red-400"
          }
           ${className}`}
          {...props}
        />

        <label
          htmlFor={name}
          className={`${
            placeholder
              ? focused
                ? `my-title-animated ${
                    error && touched
                      ? "text-red-400 focus:text-red-400"
                      : "text-primary-color focus:text-primary-color"
                  }`
                : "absolute right-0 transform translate-y-full opacity-0"
              : "my-title-animated "
          }`}
        >
          {title}
        </label>

        {actionText ? (
          <div
            className={`absolute h-full left-0 top-0 flex flex-col justify-center border-border-color-base  px-3 rounded-15px cursor-text`}
          >
            {actionText}
          </div>
        ) : (
          resetAble &&
          value?.length > 0 && (
            <div
              onClick={() => {
                setFocused(true);
                onReset(name);
              }}
              className={`absolute h-full left-0 top-0 flex flex-col justify-center border-border-color-base  px-3 rounded-15px cursor-pointer`}
            >
              <CloseCircleOutlined className="cursor-pointer ml-1 " />
            </div>
          )
        )}

        {touched && error && (
          <div className=" absolute bg-white -bottom-10 px-2 right-16  text-red-400">
            {error}
          </div>
        )}
      </div>

      {/* {icon && (
        <span
          className={`absolute h-full right-0 top-0 border-border-color-base border-r-2 px-3 rounded-15px cursor-text`}
        >
          <div className="flex flex-col justify-center h-full">
            <img src={icon} alt={`${name} icon`} />
          </div>
        </span>
      )} */}
    </>
  );
};

export default CustomInput;

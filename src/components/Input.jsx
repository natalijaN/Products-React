import React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef((props, ref) => {
  const { extraClass, value, name, type, ...inputProps } = props;
  return (
    <input
      ref={ref}
      {...inputProps}
      name={name}
      type={type}
      value={value}
      className={`border-solid border-2 border-gray-800 ${extraClass}`}
    />
  );
});

Input.defaultProps = {
  extraClass: "",
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  extraClass: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default Input;

import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { extraClass, children, type, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`button font-serif rounded text-white ${extraClass}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  extraClass: "",
};

Button.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
};

export default Button;

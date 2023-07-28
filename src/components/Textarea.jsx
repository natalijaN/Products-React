import React from "react";
import PropTypes from "prop-types";

const Textarea = React.forwardRef((props, ref) => {
  const { extraClass, value, name, type, ...textareaProps } = props;
  return (
    <textarea
      ref={ref}
      {...textareaProps}
      name={name}
      className={`border-solid border-2 border-gray-800 ${extraClass}`}
    />
  );
});

Textarea.defaultProps = {
  extraClass: "",
};

Textarea.propTypes = {
  extraClass: PropTypes.string,
  name: PropTypes.string,
};

export default Textarea;

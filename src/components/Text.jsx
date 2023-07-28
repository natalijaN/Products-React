import React from "react";
import PropTypes from "prop-types";

const Text = (props) => {
  const { extraClass, children, ...textProps } = props;
  return (
    <div {...textProps} className={`font-serif ${extraClass}`}>
      {children}
    </div>
  );
};

Text.defaultProps = {
  extraClass: "",
};

Text.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default Text;

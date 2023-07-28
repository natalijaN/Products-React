import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { extraClass, children, ...labelProps } = props;
  return (
    <div {...labelProps} className={`${extraClass}`}>
      {children}
    </div>
  );
};

Label.defaultProps = {
  extraClass: "",
};

Label.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.string,
};

export default Label;

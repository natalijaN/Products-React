import React from "react";
import PropTypes from "prop-types";

const Container = (props) => {
  const { extraClass, children, ...containerProps } = props;
  return (
    <div {...containerProps} className={`flex justify-center ${extraClass}`}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  extraClass: "",
};

Container.propTypes = {
  extraClass: PropTypes.string,
  children: PropTypes.node,
};

export default Container;

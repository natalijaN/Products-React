import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
  const { extraClass, source, alt, ...imgProps } = props;
  return (
    <img
      {...imgProps}
      className={`rounded-md zoom shadow-2xl bg-opacity-20 ${extraClass}`}
      src={`${source}`}
      alt={alt}
    />
  );
};

Image.defaultProps = {
  extraClass: "",
};

Image.propTypes = {
  extraClass: PropTypes.string,
};

export default Image;

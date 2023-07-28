import React from "react";
import PropTypes from "prop-types";

const Heading = (props) => {
  const { Tag, extraClass, text } = props;

  return (
    <Tag className={`tracking-tighter font-serif ${extraClass}`}>{text}</Tag>
  );
};

Heading.propTypes = {
  Tag: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Heading;

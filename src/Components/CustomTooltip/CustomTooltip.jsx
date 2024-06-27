import React from "react";
import { Tooltip } from "react-tooltip";

const CustomTooltip = ({
  id,
  children,
  message = 'Ups, te olvidaste de poner un message',
  place = "right",
  className = ''
}) => {
  return (
    <>
      <a id={id} className={className}>{children}</a>
      <Tooltip
        anchorSelect={`#${id}`}
        place={place}
      >
        {message}
      </Tooltip>
    </>
  );
};

export default CustomTooltip;

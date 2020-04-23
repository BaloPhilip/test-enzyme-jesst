import React, { useState } from "react";
import { Notification } from '.'


const Confirmation = ({ message, type, accept, decline }) => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = cb => {
    cb();
    setIsShow(false);
  };

  if (!message || !isShow) {
    return null;
  }

  const renderBtnsBlock = () => {
    return (
      <React.Fragment>
        {accept && (
          <div
            data-test="acceptBtn"
            className="btn btn-primary"
            onClick={() => handleClick(accept)}
          >
            Sure
          </div>
        )}
        {decline && (
          <div
            data-test="declineBtn"
            className="btn btn-danger"
            onClick={() => handleClick(decline)}
          >
            No Thanks
          </div>
        )}
      </React.Fragment>
    );
  }

  return (
    <Notification message={message} type={type}>
      {renderBtnsBlock()}
    </Notification>
  )

  
};

export default Confirmation;

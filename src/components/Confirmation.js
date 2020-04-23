import React, { useState } from "react";

const notificationType = {
  success: "alert alert-success",
  message: "alert alert-info",
  caution: "alert alert-warning",
  error: "alert alert-danger"
};

const Confirmation = ({ message, type, accept, decline }) => {
  const [isShow, setIsShow] = useState(true);

  const handleClick = cb => {
    cb();
    setIsShow(false);
  };

  if (!message) {
    return null;
  }

  return (
    <React.Fragment>
      {isShow ? (
        <div className={notificationType[type || "message"]}>
          <p>{message}</p>
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
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Confirmation;

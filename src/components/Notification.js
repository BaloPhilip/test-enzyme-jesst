import React from "react";

const notificationType = {
  success: "alert alert-success",
  message: "alert alert-info",
  caution: "alert alert-warning",
  error: "alert alert-danger"
};

const Notification = ({ message, type }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={notificationType[type || "message"]}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

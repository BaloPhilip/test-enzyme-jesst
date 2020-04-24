import React from "react";

const notificationType = {
  success: "alert alert-success",
  message: "alert alert-info",
  caution: "alert alert-warning",
  error: "alert alert-danger"
};

export default class Notification extends React.Component {

  render() {
    const { message, type, children } = this.props

    if (!message) {
      return null;
    }
  
    return (
      <div className={notificationType[type || "message"]}>
        <p>{message}</p>
        {
          children
          ? children
          : null
        }
      </div>
    );
  }
};

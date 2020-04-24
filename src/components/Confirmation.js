import React, { useState } from "react";
import { Notification } from '.'

export default class Confirmation extends Notification {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }

  handleClick = cb => {
    cb();
    this.setState(() => ({ isShow: false }))
  };

  renderBtnsBlock = () => {
    const { accept, decline } = this.props;
    return (
      <React.Fragment>
        {accept && (
          <div
            data-test="acceptBtn"
            className="btn btn-primary"
            onClick={() => this.handleClick(accept)}
          >
            Sure
          </div>
        )}
        {decline && (
          <div
            data-test="declineBtn"
            className="btn btn-danger"
            onClick={() => this.handleClick(decline)}
          >
            No Thanks
          </div>
        )}
      </React.Fragment>
    );
  }

  render() {
    const { message, type } = this.props;

    if (!this.state.isShow) {
      return null;
    }

    return (
      <Notification message={message} type={type}>
        {this.renderBtnsBlock()}
      </Notification>
    )
  }
}

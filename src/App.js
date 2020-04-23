import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Notification, Confirmation } from "./components";

const App = ({ notification }) => {
  return (
    <div id="app">
      {notification && notification.message && (
        <React.Fragment>
          <Notification {...notification} />
          <Confirmation {...notification} />
        </React.Fragment>
      )}
    </div>
  );
}

export default App

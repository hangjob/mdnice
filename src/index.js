import React from "react";
import ReactDOM from "react-dom";

import Lib from "./Lib";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Lib
    useImageHosting={{
      url: "/api/upload/images",
      name: "海栈-工具网",
      isSmmsOpen: false,
      isQiniuyunOpen: false,
      isAliyunOpen: true,
      isGiteeOpen: true,
      isGitHubOpen: true,
    }}
    defaultTitle="Markdown Nice"
  />,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

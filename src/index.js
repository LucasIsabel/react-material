import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import injectTapEventPlugin from 'react-tap-event-plugin';

ReactDOM.render(
    <App/>, document.getElementById('root'))
registerServiceWorker();
injectTapEventPlugin();
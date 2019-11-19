import React from 'react';
import { Route } from "react-router-dom";

import Login from './containers/Login';
import Homepage from './containers/Homepage';
import Registration from './containers/Registration';

function App() {
  return (
      <React.Fragment>
          <Route path="/" exact component={Homepage}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Registration}/>
      </React.Fragment>
  );
}

export default App;

import React from 'react';
import { Route } from "react-router-dom";

import Login from './containers/Login';
import Homepage from './containers/Homepage';
import Registration from './containers/Registration';
import SuperAdmin from './containers/SuperAdmin';

function App() {
  return (
      <React.Fragment>
          <Route path="/" exact component={Homepage}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Registration}/>
          <Route path="/admin" exact component={SuperAdmin}/>
      </React.Fragment>
  );
}

export default App;

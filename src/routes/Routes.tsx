import React from "react";
import { Router, Switch } from "react-router-dom";

import Layout from "components/containers/layout/Layout";
import history from "utils/history";

const Routes: React.FC = () => (
  <Router history={history}>
    <Switch>
      <Layout>Let&apos;s go</Layout>
    </Switch>
  </Router>
);

export default Routes;

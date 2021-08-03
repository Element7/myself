/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

const RouteWithSubRoutes = (params) => (
  <Route
    exact={params.exact}
    path={params.path}
    render={(props) => (
      <Layout {...props} Comp={params.component} routes={params.routes} />
    )}
  />
);

export default RouteWithSubRoutes;

import React from "react";
import { Route, Switch } from "react-router-dom";

interface RouteType {
  routes: any;
  path: string;
  key: string;
  exact: boolean;
  component: React.FunctionComponent;
}
function RouteWithSubRoutes(route: RouteType) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export const RenderRoutes: React.FC<RouteType> = ({ routes }) => (
  <Switch>
    {routes.map((route: RouteType) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);
const Home: React.FC = () => <h1>Home</h1>;
const SubRoute: React.FC = () => <h1>Inside</h1>;

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: Home,
  },
  {
    path: "/app",
    key: "APP",
    component: RenderRoutes,
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: SubRoute,
      },
      {
        path: "/app/page",
        key: "APP_PAGE",
        exact: true,
        component: SubRoute,
      },
    ],
  },
];

export default ROUTES;

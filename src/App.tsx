import { BrowserRouter as Router, Switch } from "react-router-dom";

import RouteWithSubRoutes from "./routes/Routes";
import { routes } from "./utils/routes";

const App: React.FC = () => (
  <Router>
    <Switch>
      {routes.map((route) => {
        const { key, ...params } = route;
        return <RouteWithSubRoutes key={route.key} {...params} />;
      })}
    </Switch>
  </Router>
);
export default App;

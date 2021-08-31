import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { store } from "./app/store";
import RouteWithSubRoutes from "./routes/Routes";
import { routes } from "./utils/routes";

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map((route) => {
          const { key, ...params } = route;
          return <RouteWithSubRoutes key={route.key} {...params} />;
        })}
      </Switch>
    </Router>
  </Provider>
);
export default App;

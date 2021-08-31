/* eslint-disable react/jsx-no-undef */
import { Link, Switch } from "react-router-dom";

import RouteWithSubRoutes from "../../routes/Routes";

const About: React.FC<any> = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to="/about/kacper">Bus</Link>
      </li>
      <li>
        <Link to="/about/projects">Cart</Link>
      </li>
    </ul>
    <Switch>
      {routes.map((route: any) => {
        const { key, ...params } = route;
        return <RouteWithSubRoutes key={route.key} {...params} />;
      })}
    </Switch>
  </div>
);
export default About;

import React from "react";

import Routes from "routes/Routes";

const App: React.FC = () => (
  <div className="App">
    {/* {displayRouteMenu(ROUTES)}
    <RenderRoutes routes={ROUTES} /> */}
    <Routes />
  </div>
);

export default App;

// function displayRouteMenu(routes) {
//   function singleRoute(route) {
//     return (
//       <li key={route.key}>
//         <Link to={route.path}>
//           {route.key} ({route.path})
//         </Link>
//       </li>
//     );
//   }
//   return (
//     <ul>
//       {routes.map((route) => {
//         if (route.routes) {
//           return (
//             <React.Fragment key={route.key}>
//               {singleRoute(route)}
//               {displayRouteMenu(route.routes)}
//             </React.Fragment>
//           );
//         }
//         return singleRoute(route);
//       })}
//     </ul>
//   );
// }

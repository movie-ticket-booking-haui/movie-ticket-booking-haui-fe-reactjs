import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { memo } from "react";

export const AppRouter = memo(() => {
  console.log(routes);

  return (
    <Routes>
      {routes.map((item, index) => (
        <Route path={item.path} key={index} element={item.page} />
      ))}
    </Routes>
  );
});

import React, { Fragment, lazy, Suspense } from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import { Child } from "@/types/common";

type FunComp = Record<string, { default: () => JSX.Element }>;

const PRESERVED = import.meta.glob("/src/pages/(_app|404).tsx", {
  eager: true,
}) as FunComp;

const ROUTES = import.meta.glob("/src/pages/**/[a-z[]*.tsx") as Record<
  string,
  () => Promise<{ default: React.FunctionComponent }>
>;

export const preservedRoutes = Object.keys(PRESERVED).reduce(
  (preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");
    return { ...preserved, [key]: PRESERVED[file].default };
  },
  {} as Record<string, (prop: Child) => JSX.Element>
);

export const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  return { path, component: lazy(ROUTES[route]) };
});

export const Routes = () => {
  const App = preservedRoutes?.["_app"] || Fragment;
  const NotFound = preservedRoutes?.["404"] || Fragment;

  return (
    <App>
      <Suspense fallback={null}>
        <Router>
          {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<Navigate to="/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Router>
      </Suspense>
    </App>
  );
};
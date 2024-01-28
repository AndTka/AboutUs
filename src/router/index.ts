import HomePage from "../pages/HomePage";


interface routesParams {
  path: string;
  component: () => JSX.Element;
  active: boolean;
}

export const routes: routesParams[] = [
  { path: '/', component: HomePage, active: true },
  
];

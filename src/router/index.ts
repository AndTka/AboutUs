import HomePage from "../pages/HomePage";


interface routesParams {
  path: string;
  component: () => JSX.Element;
  active: boolean;
}

export const routes: routesParams[] = [
  { path: '/AboutUs', component: HomePage, active: true },
  
];

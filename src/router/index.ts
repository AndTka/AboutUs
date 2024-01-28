import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import LovePage from "../pages/LovePage";
import PhotoPage from "../pages/PhotoPage";


interface routesParams {
  path: string;
  component: () => JSX.Element;
  active: boolean;
}

export const routes: routesParams[] = [
  { path: '/AboutUs/', component: HomePage, active: true },
  { path: '/AboutUs/home', component: HomePage, active: true },
  { path: '/AboutUs/history', component: HistoryPage, active: true },
  { path: '/AboutUs/photo', component: PhotoPage, active: true },
  { path: '/AboutUs/love', component: LovePage, active: true },
  { path: '/AboutUs/*', component: HomePage, active: true },
  
];

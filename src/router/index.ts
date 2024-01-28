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
  { path: '/', component: HomePage, active: true },
  { path: '/home', component: HomePage, active: true },
  { path: '/history', component: HistoryPage, active: true },
  { path: '/photo', component: PhotoPage, active: true },
  { path: '/love', component: LovePage, active: true },
];

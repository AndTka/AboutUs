import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { routes } from './router';

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(
          (route, i) =>
            route.active && <Route Component={route.component} path={route.path} key={i} />
        )}
      </Routes>
    </Layout>
  );
}

export default App;

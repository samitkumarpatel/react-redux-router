import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store, { fetchAllUser } from './store';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';

import { Dashboard } from './json-placeholder/Dashboard.jsx';
import { Users } from './json-placeholder/Users.jsx';
import { JsonPlaceholderHome } from './json-placeholder/JsonPlaceholderHome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        Component: Home
      },
      {
        path: "/about",
        Component: About
      },
    ]
  },
  {
    path: "/json-placeholder",
    Component: JsonPlaceholderHome,
    HydrateFallback: () => null,
    loader: async() => {
      await store.dispatch(fetchAllUser());
      return { records: [] };
    },
    children: [
      {
        path: "",
        Component: Dashboard
      },
      {
        path: "users",
        Component: Users
      }
    ]
  },
  {
    path: "*",
    element: <h1>[404] Oops! No Route Found ...</h1>
  }
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store} router={router}>
      <RouterProvider router={router} />
    </Provider>,
)

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider, useDispatch } from 'react-redux';
import store, { setInitialUsers } from './store';
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
    loader: async() => {
      //call the API to get the initial users
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
        const data = await response.json();
        store.dispatch(setInitialUsers(data));
      }
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

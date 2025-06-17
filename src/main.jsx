import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, RouterProvider , createBrowserRouter} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';

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
  ,
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

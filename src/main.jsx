import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router";
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/about",
    Component: () => import('./About.jsx').then(module => module.default)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

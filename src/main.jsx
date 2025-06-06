
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './layouts/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import { Route } from 'react-router';
import AuthProvider from './contexts/AuthProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
     {
      index: true,
      Component: Home
     },
     {
      path:'login',
      Component: Login
     },
     {
      path: 'register',
      Component: Register
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  
  </StrictMode>,
)

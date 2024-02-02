// App.tsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegistrationPage from './components/registration';
import LoginPage from './components/login'
import './App.css';
import UserTable from './components/table';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RegistrationPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/users",
      element: <UserTable />
    }
  ])
  return (<div>
    <RouterProvider router={router}/>
  </div>);
};

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RegisterForm from './features/register/RegisterForm';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/form",
    element: <RegisterForm />,
  },
  {
    path: "/",
    element: <RegisterForm />,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;

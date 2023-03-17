import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio'
import ErrorPage from './ErrorPage';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

// import './index.css'
import './Portfolio.css'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Portfolio page='projects'/>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/projects",
		element: <Portfolio page='projects'/>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/about",
		element: <Portfolio page='about'/>,
		errorElement: <ErrorPage />,
	},
	{
		path: "/contact",
		element: <Portfolio page='contact'/>,
		errorElement: <ErrorPage />,
	},
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Portfolio/> */}

	<RouterProvider router={router} />
  </React.StrictMode>
)

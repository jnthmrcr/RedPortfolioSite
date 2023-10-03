import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio'
import ErrorPage from './ErrorPage';

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

// import './index.css'
import './Portfolio.css'
import AllProjects from './components/AllProjects';

const router = createBrowserRouter([
	{
		path:"*",
		element: <ErrorPage />
	},
	{
		path: "/",
		element: <Portfolio page='home'/>,
	},
	{
		path: "/projects/",
		element: <Portfolio page='projects' />,
		errorElement: <Portfolio page='projects' />,
	},
	{
		path: "/projects/:id",
		element: <Portfolio page='projects' />,
		errorElement: <Portfolio page='projects' />,
		loader: async ({params}) => {return params.id}
	},
	{
		path: "/demos",
		element: <Portfolio page='demos'/>
	},
	{
		path: "/about",
		element: <Portfolio page='about'/>,
	},
	{
		path: "/contact",
		element: <Portfolio page='contact'/>,
	},
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Portfolio/> */}

	<RouterProvider router={router} />
  </React.StrictMode>
)

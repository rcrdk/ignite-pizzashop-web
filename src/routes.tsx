import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'
import { AuthLayout } from './layouts/auth'
import { NotFound } from './pages/app/404'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Error } from './pages/app/errors'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/orders',
				element: <Orders />,
			},
		],
	},
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				path: '/sign-in',
				element: <SignIn />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])

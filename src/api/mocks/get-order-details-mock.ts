import { http, HttpResponse } from 'msw'

import {
	GetOrderDetailsParams,
	GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
	GetOrderDetailsParams,
	never,
	GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
	return HttpResponse.json({
		id: params.orderId,
		customer: {
			name: 'Madonna da Silva',
			email: 'email@email.com',
			phone: '(00) 00000-0000',
		},
		status: 'pending',
		createdAt: new Date().toISOString(),
		orderItems: [
			{
				id: 'order-item-1',
				priceInCents: 1000,
				product: {
					name: 'Calabresa',
				},
				quantity: 1,
			},
			{
				id: 'order-item-2',
				priceInCents: 1100,
				product: {
					name: 'Milho',
				},
				quantity: 2,
			},
		],
		totalInCents: 2100,
	})
})

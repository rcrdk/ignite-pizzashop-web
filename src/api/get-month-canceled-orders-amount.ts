import { API } from '@/lib/axios'

export interface GetMonthCanceledOrdersAmountResponse {
	amount: number
	diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
	const response = await API.get<GetMonthCanceledOrdersAmountResponse>(
		'/metrics/month-canceled-orders-amount',
	)

	return response.data
}

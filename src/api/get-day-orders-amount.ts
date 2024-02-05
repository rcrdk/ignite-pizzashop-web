import { API } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
	amount: number
	diffFromYesterday: number
}

export async function getDayOrdersAmount() {
	const response = await API.get<GetDayOrdersAmountResponse>(
		'/metrics/day-orders-amount',
	)

	return response.data
}

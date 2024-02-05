import { API } from '@/lib/axios'

export type GetDailyRevenueInPeriodResponse = {
	date: string
	receipt: number
}[]

export interface GetDailyRevenueInPeriodProps {
	from?: Date
	to?: Date
}

export async function getDailyRevenueInPeriod({
	from,
	to,
}: GetDailyRevenueInPeriodProps) {
	const response = await API.get<GetDailyRevenueInPeriodResponse>(
		'/metrics/daily-receipt-in-period',
		{
			params: {
				from,
				to,
			},
		},
	)

	return response.data
}

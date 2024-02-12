import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-days-order-amount-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-order-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-order-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { signInMock } from './sign-in-mock'
import { signUpMock } from './sign-up-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
	signInMock,
	signUpMock,
	getDayOrdersAmountMock,
	getMonthOrdersAmountMock,
	getMonthCanceledOrdersAmountMock,
	getMonthRevenueMock,
	getDailyRevenueInPeriodMock,
	getPopularProductsMock,
	getProfileMock,
	getManagedRestaurantMock,
	updateProfileMock,
	getOrdersMock,
	getOrderDetailsMock,
	approveOrderMock,
	cancelOrderMock,
	deliverOrderMock,
	dispatchOrderMock,
)

export async function enableMSW() {
	if (env.MODE !== 'test') return

	await worker.start()
}

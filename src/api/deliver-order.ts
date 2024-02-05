import { API } from '@/lib/axios'

export interface DeliverOrderParams {
	orderId: string
}
export async function deliverOrder({ orderId }: DeliverOrderParams) {
	await API.patch(`/orders/${orderId}/deliver`)
}

import { API } from '@/lib/axios'

export interface ApproveOrderParams {
	orderId: string
}
export async function approveOrder({ orderId }: ApproveOrderParams) {
	await API.patch(`/orders/${orderId}/approve`)
}

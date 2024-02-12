import { API } from '@/lib/axios'

export interface UpdateProfileBody {
	name: string
	description: string | null
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
	// throw new Error()

	await API.put<UpdateProfileBody>('/profile', {
		name,
		description,
	})
}

import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
	'/me',
	() => {
		return HttpResponse.json({
			id: 'custom-user-id',
			name: 'Ricardo Augusto',
			email: 'ricardo@ricardo.com',
			phone: '(00) 00000-0000',
			role: 'manager',
			createdAt: new Date(),
			updatedAt: null,
		})
	},
)

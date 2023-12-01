export const usersService = {
	usersRead: async () => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users`,
				{
					cache: 'no-store', // 안하면 수정값이 안바뀌기도 함
				}
			)
			return res.json()
		} catch (error) {
			return []
		}
	},
	usersCreate: async user => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users`,
				{
					method: 'POST',
					body: JSON.stringify(user),
				}
			)
			return res.json()
		} catch (error) {}
	},
	usersDelete: async userPk => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/${userPk}`,
				{
					method: 'DELETE',
				}
			)
			return res.json()
		} catch (error) {}
	},
	usersUpdate: async (userPk, user) => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users/${userPk}`,
				{
					method: 'PATCH',
					body: JSON.stringify(user),
				}
			)
			return res.json()
		} catch (error) {}
	},
}

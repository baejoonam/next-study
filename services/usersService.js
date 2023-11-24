export const usersService = {
	usersRead: async () => {
		const res = await fetch('http://localhost:3000/api/users', {
			cache: 'no-store', // 안하면 수정값이 안바뀌기도 함
		})
		return res.json()
	},
}

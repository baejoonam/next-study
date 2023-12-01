export const usersService = {
	usersRead: async () => {
		try {
			const res = await fetch('http://localhost:3000/api/users', {
				cache: 'no-store', // 안하면 수정값이 안바뀌기도 함
			})
			return res.json()
		} catch (error) {
			return []
		}
	},
	usersCreate: async user => {
		try {
			const res = await fetch('http://localhost:3000/api/users', {
				method: 'POST',
				body: JSON.stringify(user),
			})
			return res.json()
		} catch (error) {}
	},
	usersDelete: async index => {
		try {
			const res = await fetch('http://localhost:3000/api/users/' + index, {
				method: 'DELETE',
			})
			return res.json()
		} catch (error) {}
	},
	usersUpdate: async (index, user) => {
		try {
			const res = await fetch('http://localhost:3000/api/users/' + index, {
				method: 'PATCH',
				body: JSON.stringify(user),
			})
			return res.json()
		} catch (error) {}
	},
}

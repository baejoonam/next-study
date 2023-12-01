export const searchService = {
	searchRead: async q => {
		try {
			const res = await fetch('http://localhost:3000/api/search?q=' + q, {
				cache: 'no-store',
			})
			return res.json()
		} catch (error) {
			return []
		}
	},
}

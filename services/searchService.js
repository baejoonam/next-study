export const searchService = {
	searchRead: async q => {
		try {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/search?q=${q}`,
				{
					cache: 'no-store',
				}
			)
			return res.json()
		} catch (error) {
			return []
		}
	},
}

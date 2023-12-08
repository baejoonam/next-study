/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/proxy/api/:path*',
				destination: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/:path*`,
			},
		]
	},
}

module.exports = nextConfig

'use client'
import { useRouter } from 'next/navigation'
import { usersService } from '@/services/usersService.js'

const Delete = ({ index }) => {
	const router = useRouter()
	return (
		<button
			onClick={async () => {
				await usersService.usersDelete(index)
				router.refresh()
			}}
		>
			Delete
		</button>
	)
}

export default Delete

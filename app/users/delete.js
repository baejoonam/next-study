'use client'
import { useRouter } from 'next/navigation'
import { usersService } from '@/services/usersService.js'

const Delete = ({ userPk }) => {
	const router = useRouter()
	return (
		<button
			onClick={async () => {
				await usersService.usersDelete(userPk)
				router.refresh()
			}}
		>
			Delete
		</button>
	)
}

export default Delete

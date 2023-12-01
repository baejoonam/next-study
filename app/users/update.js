'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usersService } from '@/services/usersService.js'
import Delete from './delete.js'

const Update = props => {
	const { userPk } = props
	const router = useRouter()
	const [user, setUser] = useState(props.user)
	const usersUpdate = async () => {
		await usersService.usersUpdate(userPk, user)
		router.refresh()
	}
	return (
		<tr key={userPk}>
			<td>
				<input
					type='text'
					placeholder='Name'
					value={user.name}
					onChange={event => {
						setUser({
							...user,
							name: event.target.value,
						})
					}}
				/>
			</td>
			<td>
				<input
					type='text'
					placeholder='Age'
					value={user.age}
					onChange={event => {
						setUser({
							...user,
							age: event.target.value,
						})
					}}
				/>
			</td>
			<td>
				<button onClick={usersUpdate}>Update</button>
				<Delete userPk={user.userPk} />
			</td>
		</tr>
	)
}

export default Update

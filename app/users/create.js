'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { usersService } from '@/services/usersService.js'

const Create = () => {
	const router = useRouter()
	const [user, setUser] = useState({
		name: '',
		age: '',
	})
	const usersCreate = async () => {
		await usersService.usersCreate(user)
		router.refresh()
	}
	return (
		<div>
			<h4>Create</h4>
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
			<button
				onClick={() => {
					usersCreate()
				}}
			>
				Create
			</button>
		</div>
	)
}

export default Create

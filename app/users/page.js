import { usersService } from '@/services/usersService'
import Link from 'next/link'
import Create from './create'
import Update from './update'

const Users = async () => {
	const users = await usersService.usersRead()
	console.log(users)
	return (
		<div>
			<h3>Users</h3>
			<hr className='d-block' />
			<Link href='/search'>Users</Link>
			<div>
				<h4>Read</h4>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
							<th>Modify</th>
						</tr>
					</thead>
					<tbody>
						{users.map(user => (
							<Update key={user.userPk} userPk={user.userPk} user={user} />
						))}
					</tbody>
				</table>
			</div>
			<hr className='d-block' />
			<Create />
		</div>
	)
}

export default Users

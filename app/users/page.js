import { usersService } from '@/services/usersService'
import Link from 'next/link'

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
						{users.map((user, index) => (
							<tr key={index}>
								<td>{user.name}</td>
								<td>{user.age}</td>
								<td>
									<button>Update</button>
									<button>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<hr className='d-block' />
			<div>
				<h4>Create</h4>
				<input type='text' placeholder='Name' />
				<input type='text' placeholder='Age' />
				<button>Create</button>
			</div>
		</div>
	)
}

export default Users

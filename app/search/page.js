import { searchService } from '@/services/searchService.js'
import SearchForm from './search-form'

const Search = async request => {
	const q = request.searchParams.q || ''
	const users = await searchService.searchRead(q)
	return (
		<div>
			<h3>Search</h3>
			<hr className='d-block' />
			<div>
				<SearchForm q={q} />
			</div>
			<hr className='d-block' />
			<div>
				<table className='table-search'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Age</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<tr key={index}>
								<td>{user.name}</td>
								<td>{user.age}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Search

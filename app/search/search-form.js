'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchForm = props => {
	const router = useRouter()
	const [q, setQ] = useState(props.q)
	const searchRead = event => {
		event.preventDefault()
		router.push('?q=' + q)
	}

	useEffect(() => {
		setQ(props.q)
	}, [props.q])

	return (
		<form onSubmit={searchRead}>
			<input
				type='text'
				placeholder='Search'
				value={q}
				onChange={event => {
					setQ(event.target.value)
				}}
			/>
			<button>Search</button>
		</form>
	)
}

export default SearchForm

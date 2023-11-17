'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
	const pathname = usePathname()
	return (
		<nav className='nav'>
			<ul>
				<li>
					<h2>
						<Link
							href='/users'
							className={pathname === '/users' ? 'active' : ''}
						>
							Users
						</Link>
					</h2>
				</li>
				<li>
					<h2>
						<Link
							href='/search'
							className={pathname === '/search' ? 'active' : ''}
						>
							Search
						</Link>
					</h2>
				</li>
			</ul>
		</nav>
	)
}

export default Nav

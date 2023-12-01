import { NextResponse } from 'next/server'
import mysql2Pool from '@/libraries/mysql2Pool'

export const GET = async request => {
	const q = request.nextUrl.searchParams.get('q')
	const mysql = await mysql2Pool()
	const [rows] = await mysql.execute(
		`
        select
        user_pk as userPk, name, age
        from users
        where
        name like concat('%', ?, '%')
    `,
		[q]
	)
	console.log(rows)
	return NextResponse.json(rows)
}

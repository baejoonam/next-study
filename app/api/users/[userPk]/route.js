import { NextResponse } from 'next/server'
import mysql2Pool from '@/libraries/mysql2Pool'

export const DELETE = async (_, context) => {
	const mysql = await mysql2Pool()
	const [rows] = await mysql.execute(
		`
	  delete from users
	  where user_pk = ?
	`,
		[context.params.userPk]
	)
	console.log(rows)
	return NextResponse.json({
		result: 'Deleted',
	})
}

export const PATCH = async (request, context) => {
	const user = await request.json()
	const mysql = await mysql2Pool()
	const [rows] = await mysql.execute(
		`
		update users
		set name = ?, age = ?
		where user_pk = ?
	`,
		[user.name, user.age, context.params.userPk]
	)
	console.log(rows)
	return NextResponse.json({
		result: 'Updated',
	})
}

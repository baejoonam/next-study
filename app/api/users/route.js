import { NextResponse } from 'next/server'
import mysql2Pool from '@/libraries/mysql2Pool'

if (!global.users) {
	global.users = [
		{
			name: '홍길동',
			age: 20,
		},
		{
			name: '춘향이',
			age: 16,
		},
	]
}

export const GET = async () => {
	debugger
	const mysql = await mysql2Pool()
	const [rows] = await mysql.execute(`
		select
		user_pk as userPk, name, age
		from users
	`)
	console.log(rows)
	return NextResponse.json(rows)
}

export const POST = async request => {
	global.users.push(await request.json())
	return NextResponse.json({
		result: 'Created',
	})
}

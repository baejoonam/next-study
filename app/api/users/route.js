import { NextResponse } from 'next/server'

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
	return NextResponse.json(global.users)
}

export const POST = async request => {
	global.users.push(await request.json())
	return NextResponse.json({
		result: 'Created',
	})
}

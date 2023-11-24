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

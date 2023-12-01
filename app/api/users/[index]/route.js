import { NextResponse } from 'next/server'

export const DELETE = async (_, context) => {
	global.users.splice(context.params.index, 1)
	return NextResponse.json({
		result: 'Deleted',
	})
}

export const PATCH = async (request, context) => {
	global.users[context.params.index] = await request.json()
	return NextResponse.json({
		result: 'Updated',
	})
}

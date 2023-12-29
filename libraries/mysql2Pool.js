import mysql2 from 'mysql2/promise'

const mysql2Pool = async () => {
	if (!global.mysql2Connection) {
		const mysql2Init = async () => {
			const connection = await mysql2.createConnection({
				host: '127.0.0.1',
				user: 'root',
				password: '0000',
				database: 'test',
			})
			const [rows, fields] = await connection.execute(
				`select 'MySQL Connected' as Result`
			)
			console.log(rows)
			global.mysql2Connection = connection
		}
		await mysql2Init()
	}
	return global.mysql2Connection
}

export default mysql2Pool

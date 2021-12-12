const { test } = require('./db')

async function main() {
	const res = await test();
	console.log({ res })

}
main()
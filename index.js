module.exports.expect = (actual) => {
	return {
		toBe: (expected) => {
			if (actual !== expected) {
				throw new Error(`${ actual } is not equal to ${ expected }`);
			}
		}
	}
};

module.exports.test = async (title, callback) => {
	try {
		await callback();
		console.log('\x1B[92m', `✓ [Test] ${ title }`);
	} catch (error) {
		console.log('\x1B[31m', `x [Test] ${ title }`);
		console.error(error)
	}
};


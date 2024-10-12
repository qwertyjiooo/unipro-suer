'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	try {
		if (!event.id) {
			return {
				code: 400,
				message: 'Missing ID parameter'
			};
		} else {
			let res = await db.collection("demo-lceCityImage")
				.field({
					"title": true,
					"video": true
				})
				.where({
					_id: event.id
				})
				.get();
			return res;
		}

	} catch (err) {
		return {
			code: 500,
			message: err.message
		};
	}
};
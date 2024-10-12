'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let query = {};
	if (event.id) {
		query.pageNav = event.id;
	}
	let res = await db.collection("demo-Tickets-details").where(query).get();
	return res;
};
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let res = await db.collection("demo-lceCityImage-theme").get();
	return res;
};

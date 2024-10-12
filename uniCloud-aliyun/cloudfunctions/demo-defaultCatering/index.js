'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let res = await db.collection("demo-defaultCatering-categories").get();
	return res;
};


// 'use strict';
// const db = uniCloud.database()
// exports.main = async (event, context) => {
// 	let query = {};
// 	if (event.id) {
// 		query.pageNav = event.id;
// 	}
// 	let res = await db.collection("demo-Nav-MicroTrave").where(query).get();
// 	return res;
// };
'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const screen = {
		
	};
	if (event.region) {
		screen.region = event.region
	}
	if (event.theme) {
		screen.theme = event.theme
	}
	if (event.source) {
		screen.source = event.source
	}
	if (event.pageNav) {
		screen.pageNav = event.pageNav
	}
	let res = await db.collection("demo-Nav-MicroTrave").field({
		"video": false
	}).where(screen).get();
	// console.log('event : ', event)
	return res;
};
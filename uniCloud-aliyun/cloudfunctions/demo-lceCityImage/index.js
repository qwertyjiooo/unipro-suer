'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const screen = {};
	if(event.region){
		screen.region = event.region
	}
	if(event.theme){
		screen.theme = event.theme
	}
	if(event.source){
		screen.source = event.source
	}
	let res = await db.collection("demo-lceCityImage").field({"video":false}).where(screen).get();
	// console.log('event : ', event)
	return res;
};
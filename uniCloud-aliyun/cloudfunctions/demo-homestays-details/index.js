'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const screen = {};
	if(event.id){
		screen.pageNav = event.id
	}
	
	let res = await db.collection('demo-homestays-details')
		.aggregate()
		.lookup({
			from: 'uni-id-users', //要联查哪个表
			localField: 'userid', // 本表字段
			foreignField: '_id', // 关联表字段
			as: 'user' // 结果映射到的新字段名
		})
		.match(screen)//传入的数值
		.project({
		    'user.username': true,
		    // 'book_id.author': true,
		    title: true,
			fullFare:true,
			images:true,
			pageNav:true
		  })
		.end()
	return res;
};


// const book = db.collection('demo-homestays-details').field({"username":true},{"_id":true})).getTemp()
	// const author = db.collection("uni-id-users").field({"username":true},{"_id":true})).getTemp()
	// let res = await db.collection(book, author).get();
	// let res = await db.collection("demo-homestays-details").field({"userid":true}).get();
	// let res = await db.collection("uni-id-users").field({"username":true},{"_id":true}).get();

// exports.main = async (event, context) => {
// 	const screen = {};
// 	if (event.id) {
// 		screen.pageNav = event.id
// 	}
// 	let res = await db.collection('demo-homestays-details')
// 		.where(screen) // 使用 where 方法进行数据过滤
// 		.aggregate()
// 		.lookup({
// 			from: 'uni-id-users', //要联查哪个表
// 			localField: 'userid', // 本表字段
// 			foreignField: '_id', // 关联表字段
// 			as: 'user' // 结果映射到的新字段名
// 		})
// 		.project({
// 			'user.username': true,
// 			// 'book_id.author': true,
// 			title: true,
// 			fullFare: true,
// 			images: true,
// 			pageNav: true
// 		})
// 		.end();
// 	return res;
// };
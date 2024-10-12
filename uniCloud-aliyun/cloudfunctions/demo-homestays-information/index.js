'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const screen = {};
	if(event.id){
		screen._id = event.id
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
			'user._id': true,
		    'user.username': true,
		    // 'book_id.author': true,
		    title: true,
			fullFare:true,
			images:true,
			pageNav:true,
			routes:true
		  })
		.end()
	return res;
};

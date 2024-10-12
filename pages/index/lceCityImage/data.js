const tabList = [{
		text: '行政区域',
		icon: '^',
		tab: 'tab-A',
	},
	{
		text: '主题',
		icon: '^',
		tab: 'tab-B'
	},
	{
		text: '来源',
		icon: '^',
		tab: 'tab-C'
	},
];
const tabTagList = [{
		tab: '行政区域',
		type: '1',
		TagList: []

	},
	{
		tab: '行政区域',
		type: '2',
		TagList: [{
				text: '全部',
				type: ''
			},
			{
				text: '亲子游',
				type: ''
			},
			{
				text: '徒步达人',
				type: ''
			},
			{
				text: '全家乐',
				type: ''
			},
			{
				text: '文艺范',
				type: ''
			},
		]

	},
	{
		tab: '行政区域',
		type: '3',
		TagList: [{
				text: '全部',
				type: ''
			},
			{
				text: '浦东新区',
				type: ''
			},
			{
				text: '黄浦区',
				type: ''
			},
			{
				text: '静安区',
				type: ''
			},
			{
				text: '徐汇区',
				type: ''
			},
		]

	},
];
export {
	tabList,
	tabTagList,
}
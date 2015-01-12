Ext.define('chatry.view.Feed',{
	extend:'Ext.navigation.View',
	xtype:'feedpanel',
	requires:['Ext.dataview.List','Ext.data.proxy.JsonP'],
	config:{
		title:'ข่าวสาร',
		iconCls:'rss',
		
		items:{
			xtype:'list',
			itemTpl:'{title}',
			store:{
				autoLoad:true,
				fields:['title','author','content'],
				
				proxy:{
					type:'jsonp',
					url:'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
					noCache:false,
					reader:{
						type:'json',
						rootProperty:'responseData.feed.entries'
					}
				}
			}
		}
	}
});
Ext.define('chatry.view.Chat',{
	extend:'Ext.navigation.View',
	xtype:'chatpanel',
	
	config:{
		title:'สนทนา',
		iconCls:'chat',
		badgeText:10,
		scrollable:true,
		styleHtmlContent:true,
		navigationBar: {hidden: true},
		items:[
		       {
		    	   docked: 'top',
                   xtype: 'toolbar',
                	   items: [
       						{
       							ui: 'back',
       							text: 'back',
       							itemId: 'backButton',
       							handler: function() {
       								Ext.Viewport.animateActiveItem({xtype: 'main'}, {type:'slide', direction: 'left'});
       							}
       						}
       					]
                	   
		       },{ 
		    	   xtype:'list',
		    	   store:'Chat' ,
		    	   itemId:'chatflist', 	
		    	   itemTpl: '{name}'
		       }
        ]
	}
});
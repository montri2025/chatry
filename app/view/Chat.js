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
		    	   itemTpl: ['<div style="position: relative;">',
		 		    	            '<img class="odd" style="display:inline; width:37px; position:absolute; margin:4px;padding:0px;top:-11px;left:-13px;" src="http://www.gravatar.com/avatar/{gravatar}?s=37&d=mm" />',
				    	            '<p style="float: left;left: 44px;position: relative;font-size: 19px;margin: -6px;">{name}</p>',
				    	            '</div>'].join('')
		       }
        ]
	}
});
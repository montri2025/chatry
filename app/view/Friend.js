Ext.define('chatry.view.Friend',{
	extend:'Ext.navigation.View',
	xtype:'friendpanel',
	requires:['Ext.List'],
	config:{
		title:'เจ้าหน้าที่',
		iconCls:'user',
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
       								//this.socket = new io.connect('127.0.0.1', {port:3000});
       								//this.socket.on("disconnect", function(){});
       								Ext.Viewport.animateActiveItem({xtype: 'main'}, {type:'slide', direction: 'left'});
       							}
       						}
       					]
                	   
		       },{ 
		    	   xtype:'list',
		    	   store:'Staff' ,
		    	   itemId:'stafflist', 	
		    	   itemTpl: '{username}'
		       }
        ],
        
        
	}
});
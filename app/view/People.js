Ext.define('chatry.view.People',{
	extend:'Ext.navigation.View',
	xtype:'peoplepanel',
	requires:['Ext.List'],
	config:{
		title:'ประชาชน',
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
		    	   store:'People' ,
		    	   itemId:'stafflist', 	
		    	   itemTpl: '{username}'
		       }
        ],
        
        
	}
});
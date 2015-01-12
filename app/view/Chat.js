Ext.define('chatry.view.Chat',{
	extend:'Ext.Panel',
	xtype:'chatpanel',
	
	config:{
		title:'สนทนา',
		iconCls:'chat',
		scrollable:true,
		styleHtmlContent:true,
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
                	   
		       }
        ],
        html: [
               '<div class="x-innerhtml" id="ext-element-523">เจ้าหน้าที่1</div>',
               '<div class="x-innerhtml" id="ext-element-523">เจ้าหน้าที่4</div>'
           ].join("")
	}
});
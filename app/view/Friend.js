Ext.define('chatry.view.Friend',{
	extend:'Ext.Panel',
	xtype:'friendpanel',
	
	config:{
		title:'เจ้าหน้าที่',
		iconCls:'user',
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
               '<div class="x-innerhtml" id="ext-element-523">เจ้าหน้าที่2</div>',
               '<div class="x-innerhtml" id="ext-element-523">เจ้าหน้าที่3</div>',
               '<div class="x-innerhtml" id="ext-element-523">เจ้าหน้าที่4</div>'
           ].join("")
	}
});
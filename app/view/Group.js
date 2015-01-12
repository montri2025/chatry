Ext.define('chatry.view.Group',{
	extend:'Ext.Panel',
	xtype:'grouppanel',
	
	config:{
		title:'กลุ่มเพื่อน',
		iconCls:'team',
		scrollable:true,
		styleHtmlContent:true,
		html: [
               '<h1>ToDO</h1>',
               '<h2>กลุ่มเพื่อน</h2>'
           ].join("")
	}
});
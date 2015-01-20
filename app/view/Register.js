Ext.define('chatry.view.Register',{
	extend:'Ext.form.Panel',
	xtype:'registerpanel',
	requires:['Ext.form.FieldSet','Ext.field.Email','Ext.field.Number','Ext.data.Batch'],
	initialize: function() {
		var config = Ext.getStore('Config');
		if (config.getAllCount() != 0) {
			var record = config.getAt(0);
			Ext.getCmp('chat-username').setValue(record.get('username'));
			Ext.getCmp('chat-email').setValue(record.get('email'));
			Ext.getCmp('chat-tel').setValue(record.get('tel'));
		} 		

	},
	config:{
		title:'สนทนา',
		iconCls:'chat',
		
		items:[
				{
					   docked: 'top',
				    xtype: 'toolbar'
				 	   
				},
		       {
		    	 xtype:'fieldset',
		    	 title:'ลงทะเบียนสนทนา',
		    	 
		    	 items:[
		    	        {
		    	        	xtype:'textfield',
		    	        	name:'username',
		    	        	id:'chat-username',
		    	        	required:true,
		    	        	placeHolder:'ชื่อผู้ใช้งาน'
		    	        		
		    	        },
		    	        {
		    	        	xtype:'emailfield',
		    	        	name:'email',
		    	        	id:'chat-email',
		    	        	placeHolder:'อีเมลล์'
		    	        },
		    	        {
		    	        	xtype:'numberfield',
		    	        	name:'tel',
		    	        	id:'chat-tel',
		    	        	placeHolder:'เบอร์มือถือ',
		    	        	required:true
		    	        }
		    	 ]
		       },
		       {
		    	   xtype:'button',
		    	   text:'เริ่มสนทนา',
		    	   itemId:'startchat',
		    	   ui:'confirm',
		    	  
		       }
		]
	}
});
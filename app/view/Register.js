Ext.define('chatry.view.Register',{
	extend:'Ext.form.Panel',
	xtype:'registerpanel',
	requires:['Ext.form.FieldSet',
	          'Ext.field.Email','Ext.field.Number'],
	config:{
		title:'พูดคุย',
		iconCls:'chat',
		
		items:[
				{
					   docked: 'top',
				    xtype: 'toolbar'
				 	   
				},
		       {
		    	 xtype:'fieldset',
		    	 title:'ลงทะเบียน',
		    	 
		    	 items:[
		    	        {
		    	        	xtype:'textfield',
		    	        	name:'name',
		    	        	placeHolder:'ชื่อผู้ใช้งาน'
		    	        		
		    	        },
		    	        {
		    	        	xtype:'emailfield',
		    	        	name:'email',
		    	        	placeHolder:'อีเมลล์'
		    	        },
		    	        {
		    	        	xtype:'numberfield',
		    	        	name:'tel',
		    	        	placeHolder:'เบอร์มือถือ',
		    	        	required:true
		    	        }
		    	 ]
		       },
		       {
		    	   xtype:'button',
		    	   text:'ตกลง',
		    	   ui:'confirm',
		    	   action: 'call-chat'
		       }
		]
	}
});
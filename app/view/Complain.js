Ext.define('chatry.view.Complain',{
	extend:'Ext.form.Panel',
	xtype:'complainpanel',
	requires:['Ext.form.FieldSet',
	          'Ext.field.Email','Ext.field.Number'],
	config:{
		title:'ร้องทุกข์',
		iconCls:'compose',
		
		items:[
		       {
		    	   docked: 'top',
                   xtype: 'toolbar'
		       },
		       {
		    	 xtype:'fieldset',
		    	 title:'รับเรื่องร้องทุกข์',
		    	 
		    	 items:[
		    	        {
		    	        	xtype:'textfield',
		    	        	name:'name',
		    	        	placeHolder:'ชื่อ'
		    	        		
		    	        },
		    	        {
		    	        	xtype:'numberfield',
		    	        	name:'idcard',
		    	        	placeHolder:'เลขบัตรประชาชน'
		    	        		
		    	        },
		    	        {
		    	        	xtype:'numberfield',
		    	        	name:'tel',
		    	        	placeHolder:'เบอร์มือถือ',
		    	        	required:true
		    	        },
		    	        {
		    	        	xtype:'emailfield',
		    	        	name:'email',
		    	        	placeHolder:'อีเมลล์'
		    	        }
		    	        
		    	 ]
		       },
		       {
		    	   xtype:'button',
		    	   text:'ตกลง',
		    	   ui:'confirm',
		    	   handler:function(){
		    		   
		    	   }
		       }
		]
	}
});
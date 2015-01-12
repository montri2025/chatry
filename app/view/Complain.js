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
		    	        	label:'ชื่อ'
		    	        		
		    	        },
		    	        {
		    	        	xtype:'numberfield',
		    	        	name:'idcard',
		    	        	label:'เลขบัตรประชาชน'
		    	        		
		    	        },
		    	        {
		    	        	xtype:'numberfield',
		    	        	name:'tel',
		    	        	label:'เบอร์มือถือ',
		    	        	required:true
		    	        },
		    	        {
		    	        	xtype:'emailfield',
		    	        	name:'email',
		    	        	label:'อีเมลล์'
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
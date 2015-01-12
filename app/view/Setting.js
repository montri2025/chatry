Ext.define('chatry.view.Setting',{
	extend:'Ext.Panel',
	xtype:'settingpanel',
	
	config:{
		title:'ตั้งค่า',
		iconCls:'settings',
		scrollable:true,
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
       								
       								Ext.Viewport.animateActiveItem({xtype:'main'}, {type:'slide', direction: 'right'});
       								//Ext.getCmp('main').setActiveItem(2);
       								//Ext.getCmp('feedpanel').hide()
       								
       							}
       						}
       					]
                	   
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
		    	   text:'บันทึก',
		    	   ui:'confirm',
		    	   handler: function() {
						Ext.Msg.alert('บันทึกข้อมลเรียบร้อยแล้ว');
					}
		       }
        ]
	}
});
Ext.define('chatry.view.Tracking',{
	extend:'Ext.Panel',
	xtype:'trackingpanel',
	
	config:{
		title:'ติดตาม',
		iconCls:'time',
		scrollable:true,
		styleHtmlContent:true,
		items:[
		       {
		    	   docked: 'top',
                   xtype: 'toolbar'
		       }
        ],
		
		html: [
               '<h1>แจ้งเหตุฉุกเฉิน</h1>',
               '<p> 1. อุบัตเหตุ ',
               '<br> 2. เจ็บป่วย',
               '<br> 3. ต้องการความช่วยเหลือ</p>',
               '<h2>ระยอง</h2>'
           ].join("")
	}
});
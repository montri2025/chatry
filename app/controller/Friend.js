Ext.define('chatry.controller.Friend', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	friendForm:'friendpanel'
        },
        control: {
        	'friendpanel #stafflist':{
        		select:'onSelect'
        	}
        }
    },
    onSelect: function(view, record) {
    	Ext.Viewport.animateActiveItem({xtype: 'chatroompanel'}, {type:'slide', direction: 'left'});
    	var chat = Ext.getStore('Chat');
    	if(chat.getAllCount()===0 || chat.findExact('name',record.get('username'))<0){
    		chat.add({name:record.get('username'),type:1,current:1});
    	}else{
    		var index = chat.findExact('current',1);
    		var record = chat.getAt(index);
    		record.set('current',0)
    		record.setDirty();
    		
    		
    		index = chat.findExact('name',record.get('username'));
    		record = chat.getAt(index);
    		record.set('current',1);
    		record.setDirty(); 
    		chat.sync();  
    	}
    	
        //Ext.Msg.alert('คุณต้องการสนทนากับ ' + record.get('name'));
        //sdconsole.log(Ext.StoreMgr.get('tess').add({name:'dds'}));
	   }
  
  
});

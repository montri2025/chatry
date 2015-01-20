Ext.define('chatry.controller.Friend', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	friendForm:'friendpanel'
        },
        control: {
        	'friendpanel #stafflist':{
        		select:'onSelect'
        	},
        	'chatpanel #chatflist':{
        		select:'onSelect'
        	}
        }
    },
    onSelect: function(view, record) {
    	
    	var chat = Ext.getStore('Chat');
    	
    	if(chat.getAllCount()===0 || chat.findExact('name',record.get('username'))<0){
    		chat.add({name:record.get('username'),type:1,current:1});
    	}else{
    		var index = chat.findExact('current',1);
    		var rs = null;
    		
    			rs = chat.getAt(index);
    			rs.set('current',0);
    			rs.setDirty();
    		
    		console.log(record.get('username'));
    		index = chat.findExact('name',record.get('username'));
    		
    			rs = chat.getAt(index);
    			rs.set('current',1);
    			rs.setDirty();
    		
    		chat.sync(); 
    	}
    	Ext.Viewport.animateActiveItem({xtype: 'chatroompanel'}, {type:'slide', direction: 'left'});
        //Ext.Msg.alert('คุณต้องการสนทนากับ ' + record.get('name'));
        //sdconsole.log(Ext.StoreMgr.get('tess').add({name:'dds'}));
	   }
  
  
});

Ext.define('chatry.controller.Register', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
           registerForm:'registerpanel'
        },
        control: {
           'registerpanel #startchat':{
        	   tap:'showChat'
           } 
        }
    }, 
  showChat:function(){
	  if(!Ext.getCmp('chat-username').getValue()){
		   Ext.Msg.alert('กรุณาระบุชื่อผู้ใช้งาน');
		   return false;
	   }
	  var config = Ext.getStore('Config').getAt(0);
	  this.socket = io.connect(config.get('server'));
	  var device = "desktop";
	    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
	      device = "mobile";
	    }
	  var config = Ext.getStore('Config');
	  if (config.getAllCount() === 0) {
		  this.socket.emit("joinserver",Ext.getCmp('chat-username').getValue(),1, device);
			config.add(this.getRegisterForm().getValues());
		} else {
			if(config.findExact('username','')===0){
				this.socket.emit("joinserver",Ext.getCmp('chat-username').getValue(),1, device);
			}
			var record = config.getAt(0);
			record.set('username',Ext.getCmp('chat-username').getValue());
			record.set('email',Ext.getCmp('chat-email').getValue());
			record.set('tel',Ext.getCmp('chat-tel').getValue());
    		record.setDirty(); 
    		config.sync();  
    		
			Ext.Viewport.animateActiveItem({xtype: 'mainchatpanel'}, {type:'slide', direction: 'left'});
		}
	  
	  this.socket.on("exists", function(data) {
		  Ext.Msg.alert('ชื่อนี้มีผู้ใช้งานอยู่แล้ว');
		  Ext.getCmp('chat-username').setValue('');
		});
	  this.socket.on("joined", function() {
		  
		  Ext.Viewport.animateActiveItem({xtype: 'mainchatpanel'}, {type:'slide', direction: 'left'});
	  });
	  this.socket.on("update-people", function(data){
		  var staff = Ext.getStore('Staff');
		  staff.removeAll();
		  Ext.iterate(data.people, function(key,obj) {
			  if(obj.type==2){
				  staff.add({username:obj.name});  
			  }
			  
		  });
		  
	  });
	 	  
	  //Ext.Viewport.animateActiveItem({xtype: 'mainchatpanel'}, {type:'slide', direction: 'left'});
  }  
  
});

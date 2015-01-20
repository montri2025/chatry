Ext.define('chatry.controller.Chat', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	chatForm:'chatroompanel'
        },
        control: {
        	'chatroompanel #sendMessage':{
        		tap:'onSendMessage'
        	}
        }
        
        
    },
    init:function(){
    	var config = Ext.getStore('Config').getAt(0);
    	
    	Ext.getStore('Messages').removeAll();
    	var socket =  io.connect(config.get('server'));
    	socket.on("whisper", function(person, msg) {
    		
    		var chat = Ext.getStore('Chat');
        	var index = chat.findExact('current',1);
    		var record = chat.getAt(index);
    		//console.log(person.name);
    		if (person.name === "You") {
    			message={local: false,nickname:'',message:msg,chatwith:record.get('name')};
    		}else{
    			message={local: true,nickname:person.name,message:msg,chatwith:person.name};
    		}
    		
    		Ext.getStore('Messages').add(message);
    	});
    },
    onSendMessage: function () {
    	//console.log('sendMessage');
    	var me = this;
    	var config = Ext.getStore('Config').getAt(0);
    	var socket =  io.connect(config.get('server'));
    	var chat = Ext.getStore('Chat');
    	var index = chat.findExact('current',1);
		var record = chat.getAt(index);
		var msg = "w:"+record.get('name')+":"+Ext.getCmp('chat-message').getValue();
		Ext.getCmp('chat-message').setValue('');
		//console.log(msg);
    	socket.emit("send",msg);
    	
    	//Ext.getStore('Messages').removeAll();
    	
    	
    },
    addMessage: function(message) {
    	//console.log('addMessage');
    },
    registerUser: function () {
    	//console.log('registerUser');
    }

  
  
});

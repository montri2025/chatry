Ext.define('chatry.controller.Chat', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	chatForm:'chatroompanel'
        },
        control: {
        	'chatroompanel #sendMessage':{
        		tap:'onSendMessage'
        	},
        	'chatroompanel #imageCapture':{
        		tap:'onCapture'
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
    			if(msg.indexOf('=photo=')>-1){
    				p=msg.split("=photo=");
    				message={local: false,nickname:'',message:msg,chatwith:record.get('name'),photo:true,photoname:p[1]};
    			}else{
    				message={local: false,nickname:'',message:msg,chatwith:record.get('name'),photo:false};
    			}
    			
    		}else{
    			if(msg.indexOf('=photo=')>-1){
    				p=msg.split("=photo=");
    				message={local: true,nickname:person.name,message:msg,chatwith:person.name,photo:true,photoname:p[1]};
    			}else{
    				message={local: true,nickname:person.name,message:msg,chatwith:person.name,photo:false};
    			}
    			
    			//navigator.notification.beep(1);
    			//navigator.notification.vibrate(2500);
    		}
    		
    		Ext.getStore('Messages').add(message);
    		
    	});
    },
    onCapture: function() {
    	navigator.camera.getPicture(
                uploadPhoto,
                function(message) { alert('get picture failed'); },
                {
                    quality         : 50,
                    destinationType : navigator.camera.DestinationType.FILE_URI,
                    sourceType      : navigator.camera.PictureSourceType.CAMERA
                }
            );
    	    var photo_name = '';
			function uploadPhoto(imageURI) {
			            var options = new FileUploadOptions();
			            options.fileKey="image";
			            photo_name = imageURI.substr(imageURI.lastIndexOf('/') + 1);
			            options.fileName=photo_name
			            
			            options.mimeType="image/jpeg";
			
			            var params = {};
			            params.value1 = "test";
			            params.value2 = "param";
			
			            options.params = params;
			
			            var ft = new FileTransfer();
			            ft.upload(imageURI, encodeURI("http://apichatry.deenaja.com:3000/upload"), win, fail, options);
			 }

	        function win(r) {
	        	var me = this;
	        	var config = Ext.getStore('Config').getAt(0);
	        	var socket =  io.connect(config.get('server'));
	        	var chat = Ext.getStore('Chat');
	        	var index = chat.findExact('current',1);
	    		var record = chat.getAt(index);
	    		var msg = "w:"+record.get('name')+":=photo="+photo_name;
	    		Ext.getCmp('chat-message').setValue('');
	    		//console.log(msg);
	        	socket.emit("send",msg);
	        }
	
	        function fail(error) {
	            alert("An error has occurred: Code = " + error.code);
	            
	        } 
    },
    onSendMessage: function () {
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

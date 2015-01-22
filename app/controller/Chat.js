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
    			message={local: false,nickname:'',message:msg,chatwith:record.get('name')};
    		}else{
    			message={local: true,nickname:person.name,message:msg,chatwith:person.name};
    			navigator.notification.beep(1);
    			navigator.notification.vibrate(2500);
    		}
    		
    		Ext.getStore('Messages').add(message);
    		
    	});
    },
    onCapture: function() {
        Ext.device.Camera.capture({
            success: this.onCaptureSuccess,
            scope: this,
            source: 'camera',
            destination: 'file'
        });
    },
    onCaptureSuccess: function(fileURI) {
    	var win = function (r) {
    	    console.log("Code = " + r.responseCode);
    	    console.log("Response = " + r.response);
    	    console.log("Sent = " + r.bytesSent);
    	}

    	var fail = function (error) {
    	    alert("An error has occurred: Code = " + error.code);
    	    console.log("upload error source " + error.source);
    	    console.log("upload error target " + error.target);
    	}

    	var options = new FileUploadOptions();
    	options.fileKey = "image";
    	options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    	options.mimeType = "text/plain";

    	var params = {};
    	params.value1 = "test";
    	params.value2 = "param";

    	options.params = params;

    	var ft = new FileTransfer();
    	ft.upload(fileURI, encodeURI("http://apichatry.deenaja.com:3000/uploads"), win, fail, options);
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

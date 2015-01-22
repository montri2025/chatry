Ext.define('chatry.view.Chatroom', {
    extend: 'Ext.navigation.View',
    xtype: 'chatroompanel',
    initialize: function () {
    	var chat = Ext.getStore('Chat');
    	var index = chat.findExact('current',1);
		var record = chat.getAt(index);
    	Ext.getCmp('chatTitle').setTitle(record.get('name'));
    	
    	var sto = Ext.getStore('Messages');
        // clear all existing filters
        sto.clearFilter();
        sto.filter('chatwith', record.get('name'));
    },
    config: {
    	navigationBar: {hidden: true},
    	
   	  	
    	items:[{

	    	   xtype:'list',
	    	   store:'Messages',
	    	   disableSelection: true,
	    	   	
	    	   itemTpl:  new Ext.XTemplate(
	    				'<tpl if="local">',
	    				'	<tpl if="photo">',
	    				'		<p style="position: relative;text-align: start"><img class="odd" style=" width: 70px; max-height: 100px;" src="http://apichatry.deenaja.com:3000/uploads/thumbs/{photoname}"></p>',
	    				'	<tpl else>',
	    				'		<img class="odd" style=" width: 32px; margin-top: -9px; margin-left: -9px;" src="http://www.gravatar.com/avatar/{gravatar}?s=28&d=mm" />',
	    				'		<span class="nickname" style="position: absolute;font-size: 9px;display: inline-block;margin-top: 28px;margin-left: -33px;">{nickname}</span>',
	    				'		<p class="triangle-right left"  style="display:inline-block;left: 10px;margin: 0px -36px 0px 7px;font-size: 16px;"> {message}</p>',
	    				'</tpl>',
	    				'<tpl else>',
	    				'	<tpl if="photo">',
	    				'	<p style="position: relative;text-align: end"><img class="odd" style=" width: 70px; max-height: 100px;" src="http://apichatry.deenaja.com:3000/uploads/thumbs/{photoname}"></p>',
	    				'	<tpl else>',
	    				'	<p class="triangle-right right"  style="display:inline-block;margin: -8px;position: absolute;right: 38px;">{message}</p>',
	    				'</tpl>',
	    				'</tpl>'
	    			)
    	},
		       {
		    	   docked: 'top',
                   xtype: 'toolbar',
                   id: 'chatTitle',
                	   items: [
       						{
       							ui: 'back',
       							text: 'back',
       							itemId: 'backButton',
       							handler: function() {
       								//this.socket = new io.connect('127.0.0.1', {port:3000});
       								//this.socket.on("disconnect", function(){});
       								Ext.Viewport.animateActiveItem({xtype: 'mainchatpanel'}, {type:'slide', direction: 'left'});
       							}
       						}
       					]
                	   
		       },{
		    	   docked: 'bottom',
                   xtype: 'toolbar', 
                   items: [
							{
								xtype: 'button',
								itemId: 'imageCapture',
								iconCls: 'camera',
								ui: 'action',
								flex: 0.5
							},
							{
            					xtype: 'textareafield',
            					id:'chat-message',
            					height: 60,
            					flex: 4,
            					name: 'message'
            				}, {
            					xtype: 'button',
            					itemId: 'sendMessage',
            					ui: 'action',
            					flex: 1,
            					text: 'ส่ง'	
            				}
                           ]
                           
		       }
        ],
           
            
        
    }
});

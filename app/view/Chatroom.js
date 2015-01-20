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
	    				'	<img class="odd" src="http://www.gravatar.com/avatar/{gravatar}?s=28&d=mm" />',
	    				'	<p class="triangle-right left"  style="display:inline-block"><span class="nickname">{nickname}:</span> {message}</p>',
	    				'<tpl else>',
	    				'	<p class="triangle-right right"  style="display:inline-block"><span class="nickname">{nickname}:</span> {message}</p>',
	    				'	<img class="even" src="http://www.gravatar.com/avatar/{gravatar}?s=28&d=mm" />',
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
								itemId: 'push',
								iconCls: 'camera',
								ui: 'action',
								flex: 0.5,
								handler: function() {
							        if (!this.overlay) {
							            this.overlay = Ext.Viewport.add({
							                xtype: 'panel',
							                modal: true,
							                hideOnMaskTap: true,
							                showAnimation: {
							                    type: 'popIn',
							                    duration: 250,
							                    easing: 'ease-out'
							                },
							                hideAnimation: {
							                    type: 'popOut',
							                    duration: 250,
							                    easing: 'ease-out'
							                },
							                centered: true,
							                width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400,
							                height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 220 : 400,
							                styleHtmlContent: true,
							                html: '&lt;p&gt;This is a modal, centered and floating panel. hideOnMaskTap is true by default so ' +
							                    'we can tap anywhere outside the overlay to hide it.&lt;/p&gt;',
							                items: [
							                    {
							                        docked: 'top',
							                        xtype: 'toolbar',
							                        title: 'Overlay Title'
							                    }
							                ],
							                scrollable: true
							            });
							        }
							        this.overlay.show();
								}
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

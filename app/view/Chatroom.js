Ext.define('chatry.view.Chatroom', {
    extend: 'Ext.tab.Panel',
    xtype: 'chatroompanel',

    config: {
       layout:'fit',
        fullscreen: true,
        items: 
            {
                
                scrollable: true,
                title:'ย้อน',
                ui:'back',
          
                items: {
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
            					height: 60,
            					flex: 4,
            					name: 'message'
            				}, {
            					xtype: 'button',
            					itemId: 'send',
            					ui: 'action',
            					flex: 1,
            					text: 'ส่ง',
            					handler: function() {
            						Ext.Msg.alert('Form Values');
            					}	
            				}
            				
            			]
                }
            }
           
            
        
    }
});

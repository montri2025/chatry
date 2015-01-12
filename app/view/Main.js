Ext.define('chatry.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: ['Ext.TitleBar'],
    config: {
        tabBarPosition: 'bottom',
        
        items: [
				{
					xtype:'feedpanel'
				},
				{
					xtype:'complainpanel'
				},
                {
                	xtype:'homepanel'
                },
                {
                	xtype:'registerpanel'
                }
        ]
    }
});

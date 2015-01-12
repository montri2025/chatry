Ext.define('chatry.view.Mainchat', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainchatpanel',
    requires: ['Ext.TitleBar'],
    config: {
        tabBarPosition: 'bottom',
        items: [
				{
					xtype:'friendpanel'
				},
                {
                	xtype:'chatpanel'
                },
                {
                	xtype:'settingpanel'
                }
        ]
    }
});

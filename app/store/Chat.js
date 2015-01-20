Ext.define('chatry.store.Chat', {
	extend: 'Ext.data.Store',

	config: {
		autoLoad: true,
		model: "chatry.model.Chat"
	}
});
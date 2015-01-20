Ext.define('chatry.store.People', {
	extend: 'Ext.data.Store',

	config: {
		autoLoad: true,
		model: "chatry.model.Staff"
	}
});
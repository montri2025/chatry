Ext.define('chatry.store.Config', {
	extend: 'Ext.data.Store',

	config: {
		autoLoad: true,
		model: "chatry.model.Config",
		data:[{username:'',email:'',tel:'',server:'apichatry.deenaja.com:3000'}
		      ]
	}
});
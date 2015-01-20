Ext.define('chatry.model.Staff', {
	extend: 'Ext.data.Model',

	config: {
		identifier: {
            type: 'uuid'
        },
		fields: [
			{
				name: 'username',
				type: 'string'
			}
		],

		proxy: {
			type: 'localstorage',
			id: 'chatry-staff'
		}
	}
});
Ext.define('chatry.model.Chat', {
	extend: 'Ext.data.Model',

	config: {
		identifier: {
            type: 'uuid'
        },
		fields: [
			{
				name: 'name',
				type: 'string'
			}, {
				name: 'type',
				type: 'int'
			}, {
				name: 'current',
				type: 'int'
			}
		],

		proxy: {
			type: 'localstorage',
			id: 'chatry-chat'
		}
	}
});
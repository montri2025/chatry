Ext.define('chatry.model.Config', {
	extend: 'Ext.data.Model',

	config: {
		identifier: {
            type: 'uuid'
        },
		fields: [
			{
				name: 'username',
				type: 'string'
			}, {
				name: 'email',
				type: 'string'
			}, {
				name: 'tel',
				type: 'string'
			},{
				name:'server',
				type:'string'
			}
		],

		proxy: {
			type: 'localstorage',
			id: 'chatry-config'
		}
	}
});
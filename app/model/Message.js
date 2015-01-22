Ext.define('chatry.model.Message', {
	extend: 'Ext.data.Model',

	config: {
		identifier: {
            type: 'uuid'
        },
		fields: [
			{
				name: 'local',
				type: 'boolean'
			}, {
				name: 'nickname',
				type: 'string'
			}, {
				name: 'message',
				type: 'string'
			},{
				name:'chatwith',
				type: 'string'
			},{
				name:'photoname',
				type:'string'
			},{
				name:'photo',
				type:'boolean'
			}
		]
	}
});
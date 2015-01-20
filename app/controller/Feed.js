Ext.define('chatry.controller.Feed', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            feed:'feedpanel'
        },
        control: {
           'feedpanel list':{
        	   itemtap:'showPost'
           } 
        }
    },
  showPost:function(list,index,element,record){
	  //this.socket = new io.Socket('127.0.0.1', {port:3000});
	  //console.log('conn');
	  
	  
	  this.getFeed().push({
		  xtype:'panel',
		  title:record.get('title'),
		  html:record.get('content'),
		  scrollable:true,
		  styleHtmlContent:true
	  });
  }  
  
});

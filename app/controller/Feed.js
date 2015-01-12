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
  index: function() {
	  
  },
  showPost:function(list,index,element,record){
	  //this.socket = new io.Socket('127.0.0.1', {port:3000});
	  //console.log('conn');
	  this.socket = new io.connect('127.0.0.1', {port:3000});
	  var device = "desktop";
	    if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) {
	      device = "mobile";
	    }
	  this.socket.emit("joinserver", 'tong', device);
	  
	  this.getFeed().push({
		  xtype:'panel',
		  title:record.get('title'),
		  html:record.get('content'),
		  scrollable:true,
		  styleHtmlContent:true
	  });
  }  
  
});

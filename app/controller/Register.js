Ext.define('chatry.controller.Register', {
    extend: 'Ext.app.Controller',
    requires:['chatry.view.Mainchat'],
    config: {
        refs: {
           
        },
        control: {
           'button[action=call-chat]':{
        	   tap:'showChat'
           } 
        }
    },
  showChat:function(){
	// Ext.Viewport.add({xtpye:'mainchatpanel'});
	  Ext.Viewport.animateActiveItem({xtype: 'mainchatpanel'}, {type:'slide', direction: 'left'});
  }  
  
});

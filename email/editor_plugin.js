(function(){tinymce.PluginManager.requireLangPack('email');tinymce.create('tinymce.plugins.EmailPlugin',{init:function(ed,url){ed.addCommand('mceEmail',function(){ed.windowManager.open({file:url+'/dialog.htm',width:320+parseInt(ed.getLang('email.delta_width',0)),height:120+parseInt(ed.getLang('email.delta_height',0)),inline:1},{plugin_url:url,some_custom_arg:'custom arg'})});ed.addButton('email',{title:'Add mailto: link',cmd:'mceEmail',image:url+'/img/email.gif'});ed.onNodeChange.add(function(ed,cm,n){cm.setActive('email',n.nodeName=='IMG')})},getInfo:function(){return{longname:'Insert Email Link',author:'Mike Wills',authorurl:'http://mikewills.me',infourl:'https://github.com/MikeWills/MCE-Email-UI',version:"0.1"}}});tinymce.PluginManager.add('email',tinymce.plugins.EmailPlugin)})();
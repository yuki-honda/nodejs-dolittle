$(function(){
  //$("<div id=\"editor\" class=\"editor\" style=\"z-index:0;\"></div>").appendTo($("body"));
  editor=ace.edit("editor");
  editor.setFontSize(16);
  editor.commands.addCommand({
    name:"fontSizeUp",
    bindKey:{
      win:"Ctrl-UP",
      mac:"Command-UP",
    },
    exec:function(editor){
      editor.setFontSize(editor.getFontSize()+1);
    }
  });
  editor.commands.addCommand({
    name:"fontSizeDown",
    bindKey:{
      win:"Ctrl-DOWN",
      mac:"Command-DOWN",
    },
    exec:function(editor){
      editor.setFontSize(editor.getFontSize()-1);
    }
  });
  /*editor.commands.addCommand({
    name:"paste",
    bindKey:{
      win:"Ctrl-V",
      mac:"Command-V",
    },
    exec:function(editor){
      editor.focus();
    }
  });*/
});

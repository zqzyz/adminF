define(["/dist/adminf.js"],function(adminF){
    return adminF.CreateController("test",adminF.Controller.base,{
        getData:function(){
            return new adminF.Service("/xxx.action")
        },
        save_click:function(){

        }
    }).events({
        beforeRender:function(context){
            //
        },
        render:function(context){
            adminF.bindEvent(this,{
                "saveBtn":this.save_click
            });
        },
        beforeClose:function(){

        },
        close:function(){

        }
    });
});
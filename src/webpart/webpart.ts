/// <reference path="vue.d.ts" />
class ControllerOption {
    id:string
}
class WebpartOption {
    id:string
}

export class WebpartItem {
    readonly id:string
    container:HTMLElement
    constructor(option?:ControllerOption){
        this.id = option&&option.id;
    }
}

export class Webpart {
    id:string
    canEdit:boolean
    text:string
    data:WebpartOption
    private list:WebpartItem[]
    private vueobj:any
    container:HTMLElement
    constructor(ele:HTMLElement,option?:WebpartOption){
        this.data = option || new WebpartOption();
        this.container = ele;
        this.container.style.border = "1px solid red";
        this.text = "webpart 2 22";
    }
    render(){
        new Vue({
            
        })
    }
    add(item:WebpartItem){
        this.list.push(item);
    }
    del(item:WebpartItem|string){
        
    }
    get(id:string){

    }
    update(item:WebpartItem,id?:string){
        id = id || item.id;
    }
}

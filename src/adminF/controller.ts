class ControllerOption {
    readonly id:string
    container:HTMLElement
    constructor(option?:ControllerOption){
        this.id = option&&option.id;
    }
}

export class Controller {
    id: string
    option:ControllerOption
    constructor(option:ControllerOption) {
        this.option = new ControllerOption(option)
        this.id = this.option.id;
    }
    init() {
        return "Hello, " + this.id;
    }
    setFromData(data:Object){

    }
    getFromData(){

    }
    formData(data?:Object){
        if(data){

        }
    }
    static create(option?:ControllerOption):Controller{
        return new Controller(option);
    }
}
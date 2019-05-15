
import { last,split,replace } from 'ramda';

let INDEX = 1;
let PAGEKEY = replace(/\./g,"_")(last(split("/")(window.location.pathname)))
const PREFIX = last(window.location.pathname.split("/")).replace(/\./g,'_')
 

export function getID(prefix:string=""):string{
    return prefix+(++INDEX);
}
export function genControllerID (){
    return getID("controller");
}
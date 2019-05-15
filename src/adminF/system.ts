
import { last,split,replace } from 'ramda';

export namespace sys{
    export let root = window;
    export let sign = replace(/\./g,"_")(last(split("/")(window.location.pathname)))
}
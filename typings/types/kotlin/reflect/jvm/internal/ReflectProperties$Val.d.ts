import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ReflectProperties$Val<T extends Object | number | string | boolean> extends Object {
    constructor()
    escape(arg0: T): Object;
    getValue(arg0: Object, arg1: Object): T;
    invoke(): T;
    unescape(arg0: Object): T;
}
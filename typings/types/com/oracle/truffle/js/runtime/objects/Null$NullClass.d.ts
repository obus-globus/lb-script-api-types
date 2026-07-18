import type { AbstractJSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/AbstractJSClass.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Null$NullClass extends AbstractJSClass {
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    private constructor()
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    toString(): string;
}
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSConstructor extends Object {
    constructor(constructor: JSFunctionObject, prototype: JSDynamicObject)
    // private constructor: JSFunctionObject;
    readonly prototype: JSDynamicObject;
    getFunctionObject(): JSFunctionObject;
    getPrototype(): JSDynamicObject;
}
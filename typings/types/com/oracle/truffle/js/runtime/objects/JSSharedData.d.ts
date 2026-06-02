import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSSharedData extends Object {
    constructor(context: JSContext, prototype: JSDynamicObject)
    // private context: JSContext;
    // private proto: JSDynamicObject;
    // private prototypeAssumption: Assumption;
    getContext(): JSContext;
    getPrototype(): JSDynamicObject;
    getPrototypeAssumption(): Assumption;
    invalidatePrototypeAssumption(): void;
}
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { GraalJSException } from '../../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { JSErrorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSErrorObject$IsIdenticalOrUndefined extends Object {
    static doError(paramreceiver: JSErrorObject, paramother: JSDynamicObject): TriState;
    static doException(paramreceiver: JSErrorObject, paramother: GraalJSException): TriState;
    static doOther(paramreceiver: JSErrorObject, paramother: Object): TriState;
    constructor()
}
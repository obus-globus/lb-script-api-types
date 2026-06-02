import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSDynamicObject$IsIdenticalOrUndefined extends Object {
    static doHostObject(paramreceiver: JSDynamicObject, paramother: JSDynamicObject): TriState;
    static doOther(paramreceiver: JSDynamicObject, paramother: Object): TriState;
    constructor()
}
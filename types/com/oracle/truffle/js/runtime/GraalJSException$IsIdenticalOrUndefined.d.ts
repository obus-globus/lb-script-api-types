import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TriState } from '../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { GraalJSException } from '../../../../../com/oracle/truffle/js/runtime/GraalJSException.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSException$IsIdenticalOrUndefined extends Object {
    static doException(paramreceiver: GraalJSException, paramother: GraalJSException, paramthisLib: InteropLibrary, paramotherLib: InteropLibrary): TriState;
    static doJSObject(paramreceiver: GraalJSException, paramother: JSDynamicObject, paramthisObj: Object): TriState;
    static doOther(paramreceiver: GraalJSException, paramother: Object, paramthisLib: InteropLibrary, paramotherLib: InteropLibrary): TriState;
    constructor()
}
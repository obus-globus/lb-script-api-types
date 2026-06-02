import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VariablesObject extends Object implements TruffleObject {
    constructor(scope: Object, returnValue: Object)
    // private returnValue: Object;
    // private scope: Object;
    getReturnValue(): Object;
}
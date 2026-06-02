import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunction$FunctionNamePropertyProxy extends PropertyProxy {
    static getProfiled(paramstore: JSDynamicObject, paramisBoundBranch: BranchProfile): Object;
    constructor()
    get(store: JSDynamicObject): TruffleString;
}
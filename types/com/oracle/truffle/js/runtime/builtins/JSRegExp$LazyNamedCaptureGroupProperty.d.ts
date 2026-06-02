import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExp$LazyNamedCaptureGroupProperty extends PropertyProxy {
    constructor(groupName: TruffleString, groupIndices: number[])
    readonly groupIndices: number[];
    // private groupName: TruffleString;
    get(object: JSDynamicObject): Object;
    getGroupIndices(): number[];
    set(object: JSDynamicObject, value: Object): boolean;
}
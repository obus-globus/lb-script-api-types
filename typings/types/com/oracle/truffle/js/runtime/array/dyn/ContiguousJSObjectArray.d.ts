import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractContiguousJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractContiguousJSObjectArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { ContiguousObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ContiguousObjectArray.d.ts'
import type { HolesJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesJSObjectArray.d.ts'
import type { ZeroBasedJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedJSObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ContiguousJSObjectArray extends AbstractContiguousJSObjectArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeContiguousJSObjectArray(paramobject: JSDynamicObject, paramlength: number, paramarray: JSDynamicObject[], paramindexOffset: number, paramarrayOffset: number, paramusedLength: number, paramintegrityLevel: number): ContiguousJSObjectArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    isSupported(object: JSDynamicObject, index: number): boolean;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesJSObjectArray;
    toNonContiguous(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): ZeroBasedJSObjectArray;
    toObject(object: JSDynamicObject, index: number, value: Object): ContiguousObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): ContiguousJSObjectArray;
}
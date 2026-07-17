import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractContiguousDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractContiguousDoubleArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { ContiguousObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ContiguousObjectArray.d.ts'
import type { HolesDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesDoubleArray.d.ts'
import type { ZeroBasedDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedDoubleArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ContiguousDoubleArray extends AbstractContiguousDoubleArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static canonicalizeNaN(paramvalue: number): number;
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeContiguousDoubleArray(paramobject: JSDynamicObject, paramlength: number, paramarray: number[], paramindexOffset: number, paramarrayOffset: number, paramusedLength: number, paramintegrityLevel: number): ContiguousDoubleArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    isSupported(object: JSDynamicObject, index: number): boolean;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesDoubleArray;
    toNonContiguous(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): ZeroBasedDoubleArray;
    toObject(object: JSDynamicObject, index: number, value: Object): ContiguousObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): ContiguousDoubleArray;
}
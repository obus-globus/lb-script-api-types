import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractContiguousIntArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractContiguousIntArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { ContiguousDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ContiguousDoubleArray.d.ts'
import type { ContiguousObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ContiguousObjectArray.d.ts'
import type { HolesObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesObjectArray.d.ts'
import type { ZeroBasedIntArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedIntArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ContiguousIntArray extends AbstractContiguousIntArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeContiguousIntArray(paramobject: JSDynamicObject, paramlength: number, paramarray: number[], paramindexOffset: number, paramarrayOffset: number, paramusedLength: number, paramintegrityLevel: number): ContiguousIntArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    isSupported(object: JSDynamicObject, index: number): boolean;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    toDouble(object: JSDynamicObject, index: number, value: number): ContiguousDoubleArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    toNonContiguous(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): ZeroBasedIntArray;
    toObject(object: JSDynamicObject, index: number, value: Object): ContiguousObjectArray;
    toObjectHoles(object: JSDynamicObject): HolesObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): ContiguousIntArray;
}
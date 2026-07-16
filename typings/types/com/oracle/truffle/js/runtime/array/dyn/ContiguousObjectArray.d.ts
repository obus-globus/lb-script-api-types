import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractContiguousObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractContiguousObjectArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { HolesObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesObjectArray.d.ts'
import type { ZeroBasedObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ContiguousObjectArray extends AbstractContiguousObjectArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeContiguousObjectArray(paramobject: JSDynamicObject, paramlength: number, paramarray: Object[], paramindexOffset: number, paramarrayOffset: number, paramusedLength: number, paramintegrityLevel: number): ContiguousObjectArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    isSupported(object: JSDynamicObject, index: number): boolean;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesObjectArray;
    toNonContiguous(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): ZeroBasedObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): ContiguousObjectArray;
}
import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractDoubleArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { ContiguousDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ContiguousDoubleArray.d.ts'
import type { HolesDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesDoubleArray.d.ts'
import type { ZeroBasedObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ZeroBasedDoubleArray extends AbstractDoubleArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createZeroBasedDoubleArray(): ZeroBasedDoubleArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static makeZeroBasedDoubleArray(paramobject: JSDynamicObject, paramlength: number, paramusedLength: number, paramarray: number[], paramintegrityLevel: number): ZeroBasedDoubleArray;
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    getInBoundsFastDouble(object: JSDynamicObject, index: number): number;
    isSupported(object: JSDynamicObject, index: number): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareInBoundsFast(object: JSDynamicObject, index: number): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setInBoundsFast(object: JSDynamicObject, index: number, value: number): void;
    setLengthLess(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
    shiftRangeImpl(object: JSDynamicObject, from: number): ScriptArray;
    toContiguous(object: JSDynamicObject, index: number, value: Object): ContiguousDoubleArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesDoubleArray;
    toObject(object: JSDynamicObject, index: number, value: Object): ZeroBasedObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): ZeroBasedDoubleArray;
}
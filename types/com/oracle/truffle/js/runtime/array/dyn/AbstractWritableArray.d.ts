import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { SparseArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/SparseArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractWritableArray extends DynamicArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    // private addRangeGrow(object: JSDynamicObject, array: Object, arrayLength: number, usedLength: number, length: number, offset: number, size: number, arrayOffset: number, indexOffset: number): ScriptArray;
    addRangeImplContiguous(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    addRangeImplZeroBased(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    allocateArray(length: number): Object;
    assertHoleCount(object: JSDynamicObject): boolean;
    checkFillHoles(object: JSDynamicObject, internalIndex: number, grown: number): boolean;
    clearUnusedArea(object: JSDynamicObject, startIdx: number, endIdx: number, arrayOffset: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
    containsHoles(object: JSDynamicObject, index: number): boolean;
    countHoles(object: JSDynamicObject): number;
    // private countHolesPrepared(object: JSDynamicObject, start: number, end: number): number;
    deleteElementHoles(object: JSDynamicObject, index: number): ScriptArray;
    // private ensureCapacity(object: JSDynamicObject, internalIndex: number, indexOffset: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    // private ensureCapacityContiguous(object: JSDynamicObject, internalIndex: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    // private ensureHolesArray(object: JSDynamicObject, length: number, newArray: Object, indexOffset: number, arrayOffset: number, usedLength: number, holesCount: number): ScriptArray;
    fillHoles(object: JSDynamicObject, internalIndex: number, grown: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): void;
    fillWithHoles(array: Object, fromIndex: number, toIndex: number): void;
    // private fixHolesArrayStartingWithAHole(object: JSDynamicObject, index: number, preparedindex: number): void;
    getArrayCapacity(object: JSDynamicObject): number;
    getArrayLength(array: Object): number;
    getArrayObject(object: JSDynamicObject): Object;
    getArrayOffset(object: JSDynamicObject): number;
    getElement(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    getInBoundsFast(object: JSDynamicObject, index: number): Object;
    getInBoundsFastDouble(object: JSDynamicObject, index: number): number;
    getInBoundsFastInt(object: JSDynamicObject, index: number): number;
    getIndexOffset(object: JSDynamicObject): number;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    hasHolesOrUnused(object: JSDynamicObject): boolean;
    incrementHolesCount(object: JSDynamicObject, offset: number): void;
    isHolePrepared(object: JSDynamicObject, index: number): boolean;
    isInBounds(object: JSDynamicObject, index: number): boolean;
    isInBoundsFast(object: JSDynamicObject, index: number): boolean;
    isSparse(object: JSDynamicObject, index: number): boolean;
    isSupported(object: JSDynamicObject, index: number): boolean;
    isSupportedContiguous(object: JSDynamicObject, index: number): boolean;
    isSupportedHoles(object: JSDynamicObject, index: number): boolean;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    moveRangePrepared(object: JSDynamicObject, src: number, dst: number, len: number): void;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    nextElementIndexHoles(object: JSDynamicObject, index0: number): number;
    nextElementIndexZeroBased(object: JSDynamicObject, index: number): number;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareInBoundsContiguous(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareInBoundsFast(object: JSDynamicObject, index: number): number;
    prepareInBoundsHoles(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupportedContiguous(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupportedHoles(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupportedZeroBased(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): void;
    previousElementIndex(object: JSDynamicObject, index: number): number;
    previousElementIndexHoles(object: JSDynamicObject, index0: number): number;
    // private rangeCheck(object: JSDynamicObject, index: number): boolean;
    removeRangeContiguous(object: JSDynamicObject, start: number, end: number): ScriptArray;
    removeRangeHoles(object: JSDynamicObject, start: number, end: number): ScriptArray;
    resizeArray(object: JSDynamicObject, newCapacity: number, oldCapacity: number, offset: number): void;
    sameTypeHolesArray(object: JSDynamicObject, length: number, array: Object, indexOffset: number, arrayOffset: number, usedLength: number, holeCount: number): AbstractWritableArray;
    setArrayOffset(object: JSDynamicObject, value: number): void;
    setHoleValue(object: JSDynamicObject, index: number): void;
    setIndexOffset(object: JSDynamicObject, value: number): void;
    setLengthImpl(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
    setLengthLess(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
    setLengthLessContiguous(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
    setLengthLessZeroBased(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
    shiftRangeImpl(object: JSDynamicObject, from: number): ScriptArray;
    toContiguous(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    toDouble(object: JSDynamicObject, index: number, value: number): AbstractWritableArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    toNonContiguous(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): ScriptArray;
    toNonHoles(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    toObject(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    toSparse(object: JSDynamicObject, index: number, value: Object): SparseArray;
    traceWriteValue(access: string, index: number, value: Object): void;
    // private updateContiguousState(object: JSDynamicObject, internalIndex: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): void;
    // private updateHolesState(object: JSDynamicObject, internalIndex: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    withIntegrityLevel(newIntegrityLevel: number): AbstractWritableArray;
}
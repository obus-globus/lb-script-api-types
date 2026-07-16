import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractObjectArray extends AbstractWritableArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    allocateArray(length: number): Object;
    castNonNull(value: Object): Object;
    cloneArray(object: JSDynamicObject): Object;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    fillHoles(object: JSDynamicObject, internalIndex: number, grown: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): void;
    fillWithHoles(array: Object, fromIndex: number, toIndex: number): void;
    getArrayCapacity(object: JSDynamicObject): number;
    getArrayLength(array: Object): number;
    getInBoundsFast(object: JSDynamicObject, index: number): Object;
    getInBoundsFastObject(object: JSDynamicObject, index: number): Object;
    isHolePrepared(object: JSDynamicObject, preparedIndex: number): boolean;
    moveRangePrepared(object: JSDynamicObject, src: number, dst: number, len: number): void;
    resizeArray(object: JSDynamicObject, newCapacity: number, oldCapacity: number, offset: number): void;
    // private rewrite(object: JSDynamicObject, index: number, value: Object): ScriptArray;
    sameTypeHolesArray(object: JSDynamicObject, length: number, array: Object, indexOffset: number, arrayOffset: number, usedLength: number, holeCount: number): AbstractWritableArray;
    setElementImpl(object: JSDynamicObject, index: number, value: Object, strict: boolean): ScriptArray;
    setHoleValue(object: JSDynamicObject, preparedIndex: number): void;
    setInBounds(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): void;
    setInBoundsFast(object: JSDynamicObject, index: number, value: Object): void;
    setSupported(object: JSDynamicObject, index: number, value: Object, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): void;
    toDouble(object: JSDynamicObject, index: number, value: number): AbstractWritableArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): AbstractObjectArray;
    toObject(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    withIntegrityLevel(newIntegrityLevel: number): AbstractObjectArray;
}
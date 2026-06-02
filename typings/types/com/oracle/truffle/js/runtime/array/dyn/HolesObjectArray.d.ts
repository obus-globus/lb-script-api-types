import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractContiguousObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractContiguousObjectArray.d.ts'
import type { AbstractObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractObjectArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class HolesObjectArray extends AbstractContiguousObjectArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createHolesObjectArray(): HolesObjectArray;
    static isHoleValue(paramvalue: Object): boolean;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeHolesObjectArray(paramobject: JSDynamicObject, paramlength: number, paramarray: (Object | null)[], paramindexOffset: number, paramarrayOffset: number, paramusedLength: number, paramholeCount: number, paramintegrityLevel: number): HolesObjectArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    castNonNull(value: Object): Object;
    containsHoles(object: JSDynamicObject, index: number): boolean;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    getInBoundsFast(object: JSDynamicObject, index: number): Object;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    isHoleFast(object: JSDynamicObject, index: number): boolean;
    isHolesType(): boolean;
    isSupported(object: JSDynamicObject, index: number): boolean;
    nextElementIndex(object: JSDynamicObject, index0: number): number;
    ownPropertyKeys(object: JSDynamicObject): Object[];
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    previousElementIndex(object: JSDynamicObject, index0: number): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    sameTypeHolesArray(object: JSDynamicObject, length: number, array: Object, indexOffset: number, arrayOffset: number, usedLength: number, holeCount: number): AbstractWritableArray;
    setInBoundsFast(object: JSDynamicObject, index: number, value: Object): void;
    setInBoundsFastHole(object: JSDynamicObject, index: number, value: Object): void;
    // private setInBoundsFastIntl(object: JSDynamicObject, index: number, internalIndex: number, value: Object): void;
    setInBoundsFastNonHole(object: JSDynamicObject, index: number, value: Object): void;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesObjectArray;
    toNonHoles(object: JSDynamicObject, index: number, value: Object): AbstractObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): HolesObjectArray;
}
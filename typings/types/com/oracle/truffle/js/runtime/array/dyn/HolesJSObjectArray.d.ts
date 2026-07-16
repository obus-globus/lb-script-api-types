import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractContiguousJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractContiguousJSObjectArray.d.ts'
import type { AbstractJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractJSObjectArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class HolesJSObjectArray extends AbstractContiguousJSObjectArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isHoleValue(paramvalue: JSDynamicObject): boolean;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeHolesJSObjectArray(paramobject: JSDynamicObject, paramlength: number, paramarray: JSDynamicObject[], paramindexOffset: number, paramarrayOffset: number, paramusedLength: number, paramholeCount: number, paramintegrityLevel: number): HolesJSObjectArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    castNonNull(value: JSDynamicObject): JSDynamicObject;
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
    setInBoundsFast(object: JSDynamicObject, index: number, value: JSDynamicObject): void;
    setInBoundsFastHole(object: JSDynamicObject, index: number, value: JSDynamicObject): void;
    // private setInBoundsFastIntl(object: JSDynamicObject, index: number, internalIndex: number, value: JSDynamicObject): void;
    setInBoundsFastNonHole(object: JSDynamicObject, index: number, value: JSDynamicObject): void;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesJSObjectArray;
    toNonHoles(object: JSDynamicObject, index: number, value: Object): AbstractJSObjectArray;
    toObject(object: JSDynamicObject, index: number, value: Object): AbstractWritableArray;
    withIntegrityLevel(newIntegrityLevel: number): HolesJSObjectArray;
}
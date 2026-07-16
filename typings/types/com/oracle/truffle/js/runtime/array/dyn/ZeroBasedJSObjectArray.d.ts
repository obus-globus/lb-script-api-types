import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractJSObjectArray.d.ts'
import type { AbstractWritableArray$SetSupportedProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray$SetSupportedProfileAccess.d.ts'
import type { ContiguousJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ContiguousJSObjectArray.d.ts'
import type { HolesJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/HolesJSObjectArray.d.ts'
import type { ZeroBasedObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ZeroBasedJSObjectArray extends AbstractJSObjectArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createZeroBasedJSObjectArray(): ZeroBasedJSObjectArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static makeZeroBasedJSObjectArray(paramobject: JSDynamicObject, paramlength: number, paramusedLength: number, paramarray: (Object | null)[], paramintegrityLevel: number): ZeroBasedJSObjectArray;
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    getInBoundsFastJSObject(object: JSDynamicObject, index: number): JSDynamicObject;
    isSupported(object: JSDynamicObject, index: number): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    prepareInBounds(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    prepareInBoundsFast(object: JSDynamicObject, index: number): number;
    prepareSupported(object: JSDynamicObject, index: number, node: Node, profile: AbstractWritableArray$SetSupportedProfileAccess): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setInBoundsFast(object: JSDynamicObject, index: number, value: JSDynamicObject): void;
    setLengthLess(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
    shiftRangeImpl(object: JSDynamicObject, from: number): ScriptArray;
    toContiguous(object: JSDynamicObject, index: number, value: Object): ContiguousJSObjectArray;
    toHoles(object: JSDynamicObject, index: number, value: Object): HolesJSObjectArray;
    toObject(object: JSDynamicObject, index: number, value: Object): ZeroBasedObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): ZeroBasedJSObjectArray;
}
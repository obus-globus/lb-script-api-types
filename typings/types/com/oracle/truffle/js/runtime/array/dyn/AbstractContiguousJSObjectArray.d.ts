import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractJSObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractContiguousJSObjectArray extends AbstractJSObjectArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static isSupportedZeroBased(paramobject: JSDynamicObject, paramindex: number): boolean;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    getArrayOffset(object: JSDynamicObject): number;
    getInBoundsFastJSObject(object: JSDynamicObject, index: number): JSDynamicObject;
    getIndexOffset(object: JSDynamicObject): number;
    lastElementIndex(object: JSDynamicObject): number;
    prepareInBoundsFast(object: JSDynamicObject, index: number): number;
    setArrayOffset(object: JSDynamicObject, arrayOffset: number): void;
    setInBoundsFast(object: JSDynamicObject, index: number, value: JSDynamicObject): void;
    setIndexOffset(object: JSDynamicObject, indexOffset: number): void;
    setLengthLess(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): void;
}
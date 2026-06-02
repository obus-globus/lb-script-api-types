import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SparseArray extends DynamicArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createArrayMap(): { [key: number]: Object };
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createSparseArray(): SparseArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static makeSparseArray(paramobject: JSDynamicObject, paramfromArray: ScriptArray): SparseArray;
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    cloneArray(object: JSDynamicObject): Object;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    getElement(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    isHolesType(): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    ownPropertyKeys(object: JSDynamicObject): Object[];
    previousElementIndex(object: JSDynamicObject, index: number): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setElementImpl(object: JSDynamicObject, index: number, value: Object, strict: boolean): ScriptArray;
    setLengthImpl(object: JSDynamicObject, len: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): SparseArray;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}
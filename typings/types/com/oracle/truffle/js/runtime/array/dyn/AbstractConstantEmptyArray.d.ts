import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractDoubleArray.d.ts'
import type { AbstractIntArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractIntArray.d.ts'
import type { AbstractJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractJSObjectArray.d.ts'
import type { AbstractObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantEmptyArray extends AbstractConstantArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    cloneArray(object: JSDynamicObject): Object;
    // private createWritableDoubleContiguous(object: JSDynamicObject, capacity: number, index: number, initialArray: number[], node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractDoubleArray;
    // private createWritableIntContiguous(object: JSDynamicObject, capacity: number, index: number, initialArray: number[], node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractIntArray;
    // private createWritableJSObjectContiguous(object: JSDynamicObject, capacity: number, index: number, initialArray: JSDynamicObject[], node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractJSObjectArray;
    // private createWritableObjectContiguous(object: JSDynamicObject, capacity: number, index: number, initialArray: Object[], node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    createWriteableDouble(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractDoubleArray;
    createWriteableInt(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractIntArray;
    createWriteableJSObject(object: JSDynamicObject, index: number, value: JSDynamicObject, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractJSObjectArray;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    isHolesType(): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    // private notifyAllocationSite(object: JSDynamicObject, newArray: DynamicArray): void;
    ownPropertyKeys(object: JSDynamicObject): Object[];
    previousElementIndex(object: JSDynamicObject, index: number): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setLengthImpl(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
}
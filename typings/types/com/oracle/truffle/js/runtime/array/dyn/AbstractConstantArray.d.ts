import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantArray extends DynamicArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    createWriteableDouble(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    createWriteableInt(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    createWriteableJSObject(object: JSDynamicObject, index: number, value: JSDynamicObject, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    firstElementIndex(object: JSDynamicObject): number;
    getElement(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    hasHoles(object: JSDynamicObject): boolean;
    isInBoundsFast(object: JSDynamicObject, index: number): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    previousElementIndex(object: JSDynamicObject, index: number): number;
    setElementImpl(object: JSDynamicObject, index: number, value: Object, strict: boolean): ScriptArray;
}
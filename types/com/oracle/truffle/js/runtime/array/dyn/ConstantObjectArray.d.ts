import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ConstantObjectArray extends AbstractConstantArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createConstantHolesObjectArray(): AbstractConstantArray;
    static createConstantObjectArray(): ConstantObjectArray;
    static getElementInBoundsDirect(paramobject: JSDynamicObject, paramindex: number): Object;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(holes: boolean, integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    // private holes: boolean;
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    cloneArray(object: JSDynamicObject): Object;
    // private countHoles(object: JSDynamicObject): number;
    createWriteableDouble(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    createWriteableInt(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    createWriteableJSObject(object: JSDynamicObject, index: number, value: JSDynamicObject, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    isHolesType(): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index0: number): number;
    ownPropertyKeys(object: JSDynamicObject): Object[];
    previousElementIndex(object: JSDynamicObject, index0: number): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setLengthImpl(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}
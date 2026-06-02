import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { ZeroBasedDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedDoubleArray.d.ts'
import type { ZeroBasedIntArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedIntArray.d.ts'
import type { ZeroBasedObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/ZeroBasedObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ConstantByteArray extends AbstractConstantArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantByteArray(): ConstantByteArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static getElementByte(paramobject: JSDynamicObject, paramindex: number): number;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    cloneArray(object: JSDynamicObject): Object;
    createWriteableDouble(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): ZeroBasedDoubleArray;
    createWriteableInt(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): ZeroBasedIntArray;
    createWriteableJSObject(object: JSDynamicObject, index: number, value: JSDynamicObject, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): ZeroBasedObjectArray;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    hasElement(object: JSDynamicObject, index: number): boolean;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setLengthImpl(object: JSDynamicObject, length: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}
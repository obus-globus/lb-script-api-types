import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class AbstractConstantLazyArray extends AbstractConstantArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    addRangeImpl(object: JSDynamicObject, offset: number, size: number): ScriptArray;
    createWriteableDouble(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    createWriteableInt(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    createWriteableJSObject(object: JSDynamicObject, index: number, value: JSDynamicObject, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    hasElement(object: JSDynamicObject, index: number): boolean;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    setLengthImpl(object: JSDynamicObject, len: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): ScriptArray;
}
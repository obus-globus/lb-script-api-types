import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractConstantEmptyArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantEmptyArray.d.ts'
import type { AbstractDoubleArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractDoubleArray.d.ts'
import type { AbstractIntArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractIntArray.d.ts'
import type { AbstractJSObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractJSObjectArray.d.ts'
import type { AbstractObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ConstantEmptyPrototypeArray extends AbstractConstantEmptyArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createConstantEmptyPrototypeArray(): AbstractConstantArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    createWriteableDouble(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractDoubleArray;
    createWriteableInt(object: JSDynamicObject, index: number, value: number, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractIntArray;
    createWriteableJSObject(object: JSDynamicObject, index: number, value: JSDynamicObject, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractJSObjectArray;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}
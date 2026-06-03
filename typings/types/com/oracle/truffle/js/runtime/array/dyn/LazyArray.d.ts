import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ListGetNode } from '../../../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractConstantLazyArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantLazyArray.d.ts'
import type { AbstractWritableArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LazyArray extends AbstractConstantLazyArray {
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createLazyArray(): LazyArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    cloneArray(object: JSDynamicObject): Object;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractWritableArray;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number, listGetNode: ListGetNode): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}
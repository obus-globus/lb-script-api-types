import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetNode } from '../../../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { DynamicArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { DynamicArray$DynamicArrayCache } from '../../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray$DynamicArrayCache.d.ts'
import type { ScriptArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$CreateWritableProfileAccess } from '../../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$CreateWritableProfileAccess.d.ts'
import type { AbstractConstantArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { AbstractConstantLazyArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantLazyArray.d.ts'
import type { AbstractObjectArray } from '../../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractObjectArray.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LazyRegexResultArray extends AbstractConstantLazyArray {
    static EMPTY_OBJECT_ARRAY: Object[];
    static LAZY_REGEX_RESULT_ARRAY: LazyRegexResultArray;
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static createLazyRegexResultArray(): LazyRegexResultArray;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static materializeGroup(paramcontext: JSContext, paramobject: JSDynamicObject, paramindex: number, paramlazyRegexResultNode: DynamicObject$GetNode, paramlazyRegexResultOriginalInputNode: DynamicObject$GetNode, paramnode: Node, paramsubstringNode: TruffleString$SubstringByteIndexNode, paramgetStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode, paramgetEndNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode): Object;
    static valueIsByte(paramvalue: number): boolean;
    private constructor(integrityLevel: number, cache: DynamicArray$DynamicArrayCache)
    cloneArray(object: JSDynamicObject): Object;
    createWritable(context: JSContext, object: JSDynamicObject, index: number, value: Object, lazyRegexResultNode: DynamicObject$GetNode, lazyRegexResultOriginalInputNode: DynamicObject$GetNode, node: Node, substringNode: TruffleString$SubstringByteIndexNode, getStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode, getEndNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode): ScriptArray;
    createWriteableObject(object: JSDynamicObject, index: number, value: Object, node: Node, profile: ScriptArray$CreateWritableProfileAccess): AbstractObjectArray;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    withIntegrityLevel(newIntegrityLevel: number): DynamicArray;
}
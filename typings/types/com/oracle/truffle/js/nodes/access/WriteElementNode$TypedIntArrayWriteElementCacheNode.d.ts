import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$AbstractTypedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$AbstractTypedArrayWriteElementCacheNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$AbstractUint8ClampedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$AbstractUint8ClampedArray.d.ts'
import type { TypedArray$TypedIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedIntArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$TypedIntArrayWriteElementCacheNode extends WriteElementNode$AbstractTypedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(arrayType: TypedArray)
    doTypedIntArray(target: JSTypedArrayObject, typedArray: TypedArray$AbstractUint8ClampedArray, index: number, value: Object, root: WriteElementNode, toDoubleNode: JSToDoubleNode, immutableIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile): boolean;
    doTypedIntArray(target: JSTypedArrayObject, typedArray: TypedArray$TypedIntArray, index: number, value: Object, root: WriteElementNode, toIntNode: JSToInt32Node, immutableIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile): boolean;
    doTypedIntArrayIntValue(target: JSTypedArrayObject, typedArray: TypedArray$TypedIntArray, index: number, iValue: number, root: WriteElementNode, inBoundsIf: InlinedConditionProfile): boolean;
}
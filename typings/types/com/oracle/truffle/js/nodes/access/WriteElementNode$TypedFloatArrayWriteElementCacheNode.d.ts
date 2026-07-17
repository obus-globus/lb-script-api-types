import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$AbstractTypedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$AbstractTypedArrayWriteElementCacheNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$TypedFloatArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedFloatArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$TypedFloatArrayWriteElementCacheNode extends WriteElementNode$AbstractTypedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(arrayType: TypedArray)
    doTypedFloatArray(target: JSTypedArrayObject, typedArray: TypedArray$TypedFloatArray, index: number, value: Object, root: WriteElementNode, immutableIf: InlinedConditionProfile, inBoundsIf: InlinedConditionProfile, toDouble: JSToDoubleNode): boolean;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$AbstractTypedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$AbstractTypedArrayWriteElementCacheNode.d.ts'
import type { JSToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$TypedBigIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedBigIntArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$TypedBigIntArrayWriteElementCacheNode extends WriteElementNode$AbstractTypedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(arrayType: TypedArray)
    // private toBigIntNode: JSToBigIntNode;
    doBigIntArray(target: JSDynamicObject, typedArray: TypedArray$TypedBigIntArray, index: number, value: Object, root: WriteElementNode, inBoundsIf: InlinedConditionProfile): boolean;
}
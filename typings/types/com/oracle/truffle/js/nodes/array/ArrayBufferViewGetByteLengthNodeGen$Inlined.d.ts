import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ArrayBufferViewGetByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferViewGetByteLengthNode.d.ts'
import type { ArrayBufferViewGetByteLengthNodeGen$GetByteLengthCachedData } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferViewGetByteLengthNodeGen$GetByteLengthCachedData.d.ts'
import type { TypedArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
export class ArrayBufferViewGetByteLengthNodeGen$Inlined extends ArrayBufferViewGetByteLengthNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private getByteLengthCached_cache: InlineSupport$ReferenceField<ArrayBufferViewGetByteLengthNodeGen$GetByteLengthCachedData>;
    // private getByteLength_typedArrayLengthNode_: TypedArrayLengthNode;
    // private getByteLength_typedArrayLengthNode__field1_: InlineSupport$ReferenceField<Node>;
    // private state_0_: InlineSupport$StateField;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: JSTypedArrayObject, arg2Value: JSContext): number;
    executeInt(arg0Value: Node, arg1Value: JSTypedArrayObject, arg2Value: JSContext): number;
}
import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TypedArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
export class TypedArrayLengthNodeGen extends TypedArrayLengthNode {
    static create(): TypedArrayLengthNode;
    static inline(paramtarget: InlineSupport$InlineTarget): TypedArrayLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private autoLength_getByteLengthNode__field1_: Node;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: JSTypedArrayObject, arg2Value: JSContext): number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: JSTypedArrayObject, arg2Value: JSContext): number;
}
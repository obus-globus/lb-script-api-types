import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ArrayBufferByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayBufferByteLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
export class ArrayBufferByteLengthNodeGen$Inlined extends ArrayBufferByteLengthNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private interopArrayBuffer_interop_: InlineSupport$ReferenceField<InteropLibrary>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: JSArrayBufferObject, arg2Value: JSContext): number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: JSArrayBufferObject, arg2Value: JSContext): number;
}
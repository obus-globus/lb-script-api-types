import type { InlineSupport$InlineTarget } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { ArrayIteratorGetLengthNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayIteratorGetLengthNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayIteratorGetLengthNodeGen$Inlined extends ArrayIteratorGetLengthNode implements UnadoptableNode {
    private constructor(target: InlineSupport$InlineTarget)
    // private fallback_getLengthNode_: InlineSupport$ReferenceField<JSGetLengthNode>;
    // private state_0_: InlineSupport$StateField;
    // private typedArray_errorBranch_: InlinedBranchProfile;
    // private typedArray_typedArrayLengthNode_: TypedArrayLengthNode;
    // private typedArray_typedArrayLengthNode__field1_: InlineSupport$ReferenceField<Node>;
    execute(arg0Value: Node, arg1Value: Object, arg2Value: JSContext): number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object, arg2Value: JSContext): number;
    // private fallbackGuard_(state_0: number, arg0Value: Node, arg1Value: Object, arg2Value: JSContext): boolean;
}
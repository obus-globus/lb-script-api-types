import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { GetIteratorDirectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorDirectNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetIteratorFromMethodNodeGen$Inlined extends GetIteratorFromMethodNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private errorBranch_: InlinedBranchProfile;
    // private getIteratorDirectNode_: GetIteratorDirectNode;
    // private getIteratorDirectNode__field1_: InlineSupport$ReferenceField<Node>;
    // private getIteratorDirectNode__field2_: InlineSupport$ReferenceField<Node>;
    // private isCallableNode_: InlineSupport$ReferenceField<IsCallableNode>;
    // private iteratorCallNode_: InlineSupport$ReferenceField<JSFunctionCallNode>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: Object, arg2Value: Object): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object, arg2Value: Object): IteratorRecord;
}
import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { GetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetIteratorNodeGen$Inlined extends GetIteratorNode implements UnadoptableNode {
    static create(): GetIteratorNode;
    static getUncached(): GetIteratorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private getIteratorFromMethodNode_: GetIteratorFromMethodNode;
    // private getIteratorFromMethodNode__field1_: InlineSupport$ReferenceField<Node>;
    // private getIteratorFromMethodNode__field2_: InlineSupport$ReferenceField<Node>;
    // private getIteratorFromMethodNode__field3_: InlineSupport$ReferenceField<Node>;
    // private getIteratorFromMethodNode__field4_: InlineSupport$ReferenceField<Node>;
    // private getIteratorMethodNode_: InlineSupport$ReferenceField<GetMethodNode>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: Object): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): IteratorRecord;
}
import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$ReferenceField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$ReferenceField.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { CreateAsyncFromSyncIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateAsyncFromSyncIteratorNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
export class CreateAsyncFromSyncIteratorNodeGen$Inlined extends CreateAsyncFromSyncIteratorNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private getNextMethodNode_: InlineSupport$ReferenceField<PropertyGetNode>;
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: IteratorRecord): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: IteratorRecord): IteratorRecord;
}
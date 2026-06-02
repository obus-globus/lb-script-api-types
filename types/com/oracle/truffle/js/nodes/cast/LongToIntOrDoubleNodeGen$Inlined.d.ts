import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class LongToIntOrDoubleNodeGen$Inlined extends LongToIntOrDoubleNode implements UnadoptableNode {
    static create(): LongToIntOrDoubleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private state_0_: InlineSupport$StateField;
    // private toDoubleBranch_: InlinedBranchProfile;
    execute(arg0Value: Node, arg1Value: number): Number;
}
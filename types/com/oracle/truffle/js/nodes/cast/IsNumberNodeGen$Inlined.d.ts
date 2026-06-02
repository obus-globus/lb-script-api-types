import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InlineSupport$StateField } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$StateField.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IsNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsNumberNodeGen$Inlined extends IsNumberNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(target: InlineSupport$InlineTarget)
    // private state_0_: InlineSupport$StateField;
    execute(arg0Value: Node, arg1Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): boolean;
    // private fallbackGuard_(state_0: number, arg0Value: Node, arg1Value: Object): boolean;
}
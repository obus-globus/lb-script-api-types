import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSToBooleanNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNodeGen$ForeignObject0Data.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToBooleanNodeGen extends JSToBooleanNode {
    static create(): JSToBooleanNode;
    static getUncached(): JSToBooleanNode;
    static inline(paramtarget: InlineSupport$InlineTarget): JSToBooleanNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private foreignObject0_cache: JSToBooleanNodeGen$ForeignObject0Data;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): boolean;
    executeBoolean(arg0Value: Node, arg1Value: Object): boolean;
    executeBoolean(value: Object): boolean;
    // private foreignObject1Boundary(state_0: number, arg0Value: Node, arg1Value: Object): boolean;
}
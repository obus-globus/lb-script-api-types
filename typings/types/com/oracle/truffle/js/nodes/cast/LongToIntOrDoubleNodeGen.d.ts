import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class LongToIntOrDoubleNodeGen extends LongToIntOrDoubleNode {
    static create(): LongToIntOrDoubleNode;
    static getUncached(): LongToIntOrDoubleNode;
    static inline(paramtarget: InlineSupport$InlineTarget): LongToIntOrDoubleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: number): Number;
}
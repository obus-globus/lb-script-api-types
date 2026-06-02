import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { LongToIntOrDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/LongToIntOrDoubleNode.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class LongToIntOrDoubleNodeGen$Uncached extends LongToIntOrDoubleNode implements UnadoptableNode {
    static create(): LongToIntOrDoubleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Node, arg1Value: number): Number;
}
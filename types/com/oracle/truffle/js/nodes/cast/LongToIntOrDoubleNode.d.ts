import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class LongToIntOrDoubleNode extends JavaScriptBaseNode {
    static create(): LongToIntOrDoubleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(node: Node, longValue: number): Number;
    fromIndex(node: Node, index: number): Number;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IsObjectNode extends JavaScriptBaseNode {
    static create(): IsObjectNode;
    static getUncached(): IsObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    executeBoolean(operand: Object): boolean;
}
import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InternalCallNode extends JavaScriptBaseNode {
    static create(): InternalCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(callTarget: CallTarget, arguments: Object[]): Object;
}
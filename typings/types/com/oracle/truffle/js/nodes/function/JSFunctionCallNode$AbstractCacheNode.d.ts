import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionCallNode$AbstractCacheNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private nextNode: JSFunctionCallNode$AbstractCacheNode;
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    executeCall(arguments: Object[]): Object;
    withNext(newNext: JSFunctionCallNode$AbstractCacheNode): JSFunctionCallNode$AbstractCacheNode;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$GenericFallbackCacheNode extends JSFunctionCallNode$AbstractCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    executeCall(arguments: Object[]): Object;
    // private typeError(function_: Object): JSException;
}
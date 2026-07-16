import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { JSProxyCallNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSProxyCallNode.d.ts'
import type { JSFunctionCallNode$AbstractCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$AbstractCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$JSProxyInlineCacheNode extends JSFunctionCallNode$AbstractCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(isNew: boolean, isNewTarget: boolean, context: JSContext)
    // private proxyCall: JSProxyCallNode;
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    executeCall(arguments: Object[]): Object;
}
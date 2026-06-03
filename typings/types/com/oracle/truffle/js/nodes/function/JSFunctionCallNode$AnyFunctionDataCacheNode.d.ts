import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { JSFunctionCallNode$DirectJSFunctionCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$DirectJSFunctionCacheNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$AnyFunctionDataCacheNode extends JSFunctionCallNode$DirectJSFunctionCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionData: JSFunctionData, callTarget: CallTarget)
    constructor(functionData: JSFunctionData, directCallNode: DirectCallNode)
    // private functionData: JSFunctionData;
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    getFunctionData(): JSFunctionData;
}
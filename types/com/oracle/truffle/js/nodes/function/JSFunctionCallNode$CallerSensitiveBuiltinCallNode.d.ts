import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode$JSFunctionCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$JSFunctionCacheNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionCallNode$CallerSensitiveBuiltinCallNode extends JSFunctionCallNode$JSFunctionCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionData: JSFunctionData, callTarget: CallTarget)
    // private callNode: DirectCallNode;
    // private functionData: JSFunctionData;
    executeCall(arguments: Object[]): Object;
    getFunctionData(): JSFunctionData;
}
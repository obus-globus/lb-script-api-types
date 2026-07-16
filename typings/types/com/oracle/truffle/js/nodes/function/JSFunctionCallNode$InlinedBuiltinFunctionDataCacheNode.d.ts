import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeVisitor } from '../../../../../../com/oracle/truffle/api/nodes/NodeVisitor.d.ts'
import type { JSBuiltinNode$Inlined } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlined.d.ts'
import type { JSFunctionCallNode$InlinedBuiltinCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$InlinedBuiltinCallNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$InlinedBuiltinFunctionDataCacheNode extends JSFunctionCallNode$InlinedBuiltinCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionData: JSFunctionData, callTarget: CallTarget, builtinNode: JSBuiltinNode$Inlined)
    // private functionData: JSFunctionData;
    accept(nodeVisitor: NodeVisitor): void;
    accept(function_: Object): boolean;
    getFunctionData(): JSFunctionData;
}
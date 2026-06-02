import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { DirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSBuiltinNode$Inlined } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlined.d.ts'
import type { JSFunctionCallNode$JSFunctionCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$JSFunctionCacheNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionCallNode$InlinedBuiltinCallNode extends JSFunctionCallNode$JSFunctionCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(callTarget: CallTarget, builtinNode: JSBuiltinNode$Inlined)
    // private builtinNode: JSBuiltinNode$Inlined;
    // private callNode: DirectCallNode;
    // private callTarget: CallTarget;
    executeCall(arguments: Object[]): Object;
}
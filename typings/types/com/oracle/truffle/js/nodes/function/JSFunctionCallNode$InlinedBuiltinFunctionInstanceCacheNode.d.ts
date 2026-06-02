import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSBuiltinNode$Inlined } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode$Inlined.d.ts'
import type { JSFunctionCallNode$InlinedBuiltinCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$InlinedBuiltinCallNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$InlinedBuiltinFunctionInstanceCacheNode extends JSFunctionCallNode$InlinedBuiltinCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionObj: JSFunctionObject, callTarget: CallTarget, builtinNode: JSBuiltinNode$Inlined)
    // private functionObj: JSFunctionObject;
    accept(function_: Object): boolean;
    getFunctionData(): JSFunctionData;
    isInstanceCache(): boolean;
}
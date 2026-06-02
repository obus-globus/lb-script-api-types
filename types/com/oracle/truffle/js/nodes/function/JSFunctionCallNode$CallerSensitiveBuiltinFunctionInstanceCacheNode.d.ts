import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSFunctionCallNode$CallerSensitiveBuiltinCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode$CallerSensitiveBuiltinCallNode.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSFunctionCallNode$CallerSensitiveBuiltinFunctionInstanceCacheNode extends JSFunctionCallNode$CallerSensitiveBuiltinCallNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(functionObj: JSFunctionObject, functionData: JSFunctionData, callTarget: CallTarget)
    // private functionObj: JSFunctionObject;
    accept(function_: Object): boolean;
    isInstanceCache(): boolean;
}
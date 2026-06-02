import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSOverloadedUnaryNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(overloadedOperatorName: TruffleString)
    // private overloadedOperatorName: TruffleString;
    doCached(operand: JSOverloadedOperatorsObject, operatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doGeneric(operand: JSOverloadedOperatorsObject, callNode: JSFunctionCallNode): Object;
    execute(operand: Object): Object;
    getOverloadedOperatorName(): TruffleString;
    // private performOverloaded(callNode: JSFunctionCallNode, operatorImplementation: Object, operand: Object): Object;
}
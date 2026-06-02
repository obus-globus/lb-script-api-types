import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSOverloadedBinaryNode$DispatchBinaryOperatorNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(overloadedOperatorName: TruffleString)
    // private overloadedOperatorName: TruffleString;
    doBigIntOverloaded(left: BigInt, right: JSOverloadedOperatorsObject, rightOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doGeneric(left: Object, right: Object, callNode: JSFunctionCallNode): Object;
    doNumberOverloaded(left: Object, right: JSOverloadedOperatorsObject, rightOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doOverloadedBigInt(left: JSOverloadedOperatorsObject, right: BigInt, leftOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doOverloadedNumber(left: JSOverloadedOperatorsObject, right: Object, leftOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doOverloadedOverloaded(left: JSOverloadedOperatorsObject, right: JSOverloadedOperatorsObject, leftOperatorCounter: number, rightOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doOverloadedString(left: JSOverloadedOperatorsObject, right: Object, leftOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doOverloadedUnsupportedPrimitive(left: JSOverloadedOperatorsObject, right: Object): Object;
    doStringOverloaded(left: Object, right: JSOverloadedOperatorsObject, rightOperatorCounter: number, operatorImplementation: Object, callNode: JSFunctionCallNode): Object;
    doUnsupportedPrimitiveOverloaded(left: Object, right: JSOverloadedOperatorsObject): Object;
    execute(left: Object, right: Object): Object;
    getOverloadedOperatorName(): TruffleString;
    isAddition(): boolean;
    isEquality(): boolean;
    // private missingImplementation(left: Object, right: Object): boolean;
    // private performOverloaded(callNode: JSFunctionCallNode, operatorImplementation: Object, left: Object, right: Object): Object;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSAddNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSAddNode.d.ts'
import type { JSOverloadedBinaryNode$DispatchBinaryOperatorNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode$DispatchBinaryOperatorNode.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { JSToOperandNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToOperandNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSOverloadedBinaryNode extends JavaScriptBaseNode {
    static create(paramoverloadedOperatorName: TruffleString, paramhint: JSToPrimitiveNode$Hint): JSOverloadedBinaryNode;
    static createHintDefault(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintNumber(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintNumberLeftToRight(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintNumberRightToLeft(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintString(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createNumeric(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(overloadedOperatorName: TruffleString, numeric: boolean, hint: JSToPrimitiveNode$Hint, leftToRight: boolean)
    // private hint: JSToPrimitiveNode$Hint;
    // private leftToRight: boolean;
    // private numeric: boolean;
    // private overloadedOperatorName: TruffleString;
    doToNumericOperand(left: Object, right: Object, toNumericOperandLeftNode: JSToNumericNode, toNumericOperandRightNode: JSToNumericNode, dispatchBinaryOperatorNode: JSOverloadedBinaryNode$DispatchBinaryOperatorNode): Object;
    doToOperandAddition(left: Object, right: Object, node: Node, toOperandLeftNode: JSToOperandNode, toOperandRightNode: JSToOperandNode, dispatchBinaryOperatorNode: JSOverloadedBinaryNode$DispatchBinaryOperatorNode, toStringLeftNode: JSToStringNode, toStringRightNode: JSToStringNode, leftStringProfile: InlinedConditionProfile, rightStringProfile: InlinedConditionProfile, addNode: JSAddNode): Object;
    doToOperandGeneric(left: Object, right: Object, toOperandLeftNode: JSToOperandNode, toOperandRightNode: JSToOperandNode, dispatchBinaryOperatorNode: JSOverloadedBinaryNode$DispatchBinaryOperatorNode): Object;
    execute(left: Object, right: Object): Object;
    getHint(): JSToPrimitiveNode$Hint;
    getOverloadedOperatorName(): TruffleString;
    isAddition(): boolean;
    isEquality(): boolean;
    isNumeric(): boolean;
}
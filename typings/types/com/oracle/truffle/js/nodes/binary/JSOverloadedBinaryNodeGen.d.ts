import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSOverloadedBinaryNode$DispatchBinaryOperatorNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode$DispatchBinaryOperatorNode.d.ts'
import type { JSOverloadedBinaryNodeGen$ToOperandAdditionData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$ToOperandAdditionData.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { JSToOperandNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToOperandNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSOverloadedBinaryNodeGen extends JSOverloadedBinaryNode {
    static create(paramoverloadedOperatorName: TruffleString, paramhint: JSToPrimitiveNode$Hint): JSOverloadedBinaryNode;
    static create(paramoverloadedOperatorName: TruffleString, paramnumeric: boolean, paramhint: JSToPrimitiveNode$Hint, paramleftToRight: boolean): JSOverloadedBinaryNode;
    static createHintDefault(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintNumber(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintNumberLeftToRight(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintNumberRightToLeft(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createHintString(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static createNumeric(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(overloadedOperatorName: TruffleString, numeric: boolean, hint: JSToPrimitiveNode$Hint, leftToRight: boolean)
    // private dispatchBinaryOperatorNode: JSOverloadedBinaryNode$DispatchBinaryOperatorNode;
    // private state_0_: number;
    // private toNumericOperand_toNumericOperandLeftNode_: JSToNumericNode;
    // private toNumericOperand_toNumericOperandRightNode_: JSToNumericNode;
    // private toOperandAddition_cache: JSOverloadedBinaryNodeGen$ToOperandAdditionData;
    // private toOperandGeneric_toOperandLeftNode_: JSToOperandNode;
    // private toOperandGeneric_toOperandRightNode_: JSToOperandNode;
    execute(arg0Value: Object, arg1Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): Object;
}
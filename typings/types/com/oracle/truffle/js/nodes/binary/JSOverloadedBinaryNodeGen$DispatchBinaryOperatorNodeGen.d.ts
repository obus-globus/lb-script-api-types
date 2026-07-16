import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSOverloadedBinaryNode$DispatchBinaryOperatorNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode$DispatchBinaryOperatorNode.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$BigIntOverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$BigIntOverloadedData.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$NumberOverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$NumberOverloadedData.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedBigIntData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedBigIntData.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedNumberData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedNumberData.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedOverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedOverloadedData.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedStringData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedStringData.d.ts'
import type { JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$StringOverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$StringOverloadedData.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen extends JSOverloadedBinaryNode$DispatchBinaryOperatorNode {
    static create(paramoverloadedOperatorName: TruffleString): JSOverloadedBinaryNode$DispatchBinaryOperatorNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(overloadedOperatorName: TruffleString)
    // private bigIntOverloaded_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$BigIntOverloadedData;
    // private generic_callNode_: JSFunctionCallNode;
    // private numberOverloaded_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$NumberOverloadedData;
    // private overloadedBigInt_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedBigIntData;
    // private overloadedNumber_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedNumberData;
    // private overloadedOverloaded_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedOverloadedData;
    // private overloadedString_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$OverloadedStringData;
    // private state_0_: number;
    // private stringOverloaded_cache: JSOverloadedBinaryNodeGen$DispatchBinaryOperatorNodeGen$StringOverloadedData;
    // private checkForPolymorphicSpecialize(oldState_0: number): void;
    execute(arg0Value: Object, arg1Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): Object;
}
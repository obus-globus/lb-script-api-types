import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBitwiseOrConstantNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBitwiseOrConstantNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSBitwiseOrConstantNodeGen extends JSBitwiseOrConstantNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramrightValue: Object): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramrightValue: Object): JSBitwiseOrConstantNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, rightValue: Object)
    // private double_leftInt32_: JSToInt32Node;
    // private genericIntCase_innerOrNode_: JavaScriptNode;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    // private toNumeric: JSToNumericNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeInt(frameValue: VirtualFrame): number;
    // private executeInt_double4(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_generic5(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int3(state_0__: number, frameValue: VirtualFrame): number;
    executeObject(operandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    // private executeVoid_double7(state_0__: number, frameValue: VirtualFrame): void;
    // private executeVoid_generic8(state_0__: number, frameValue: VirtualFrame): void;
    // private executeVoid_int6(state_0__: number, frameValue: VirtualFrame): void;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
}
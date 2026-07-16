import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBitwiseAndConstantNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBitwiseAndConstantNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSBitwiseAndConstantNodeGen extends JSBitwiseAndConstantNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramleft: JavaScriptNode, paramrightValue: Object): JSBitwiseAndConstantNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, rightValue: Object)
    // private double_leftInt32_: JSToInt32Node;
    // private generic_innerAndNode_: JavaScriptNode;
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
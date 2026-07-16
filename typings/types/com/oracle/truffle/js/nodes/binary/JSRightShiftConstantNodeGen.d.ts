import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSRightShiftConstantNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSRightShiftConstantNode.d.ts'
import type { JSRightShiftConstantNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSRightShiftConstantNodeGen$GenericData.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRightShiftConstantNodeGen extends JSRightShiftConstantNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramoperand: JavaScriptNode, paramshiftValue: number): JSRightShiftConstantNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode, shiftValue: number)
    // private double_leftInt32Node_: JSToInt32Node;
    // private generic_cache: JSRightShiftConstantNodeGen$GenericData;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeInt(frameValue: VirtualFrame): number;
    executeInt(operandNodeValue: Object): number;
    // private executeInt_double4(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_generic5(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int3(state_0__: number, frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSLeftShiftNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSLeftShiftNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSRightShiftNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSRightShiftNode.d.ts'
import type { JSRightShiftNodeGen$DoubleData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSRightShiftNodeGen$DoubleData.d.ts'
import type { JSRightShiftNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSRightShiftNodeGen$GenericData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRightShiftNodeGen extends JSRightShiftNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(): JSRightShiftNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSRightShiftNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private bigInt_leftShift_: JSLeftShiftNode;
    // private double_cache: JSRightShiftNodeGen$DoubleData;
    // private generic_cache: JSRightShiftNodeGen$GenericData;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private rightShift: JSRightShiftNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(leftNodeValue: Object, rightNodeValue: Object): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeInt(frameValue: VirtualFrame): number;
    // private executeInt_double5(state_0__: number, frameValue: VirtualFrame, leftNodeValue_: number): number;
    // private executeInt_generic6(state_0__: number, frameValue: VirtualFrame, leftNodeValue_: number): number;
    // private executeInt_int4(state_0__: number, frameValue: VirtualFrame, leftNodeValue_: number): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double_double2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSLeftShiftNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSLeftShiftNode.d.ts'
import type { JSLeftShiftNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSLeftShiftNodeGen$GenericData.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToUInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSLeftShiftNodeGen extends JSLeftShiftNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(): JSLeftShiftNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSLeftShiftNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private double_leftInt32_: JSToInt32Node;
    // private double_rightUInt32_: JSToUInt32Node;
    // private generic_cache: JSLeftShiftNodeGen$GenericData;
    // private leftShift: JSLeftShiftNode;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeInt(frameValue: VirtualFrame): number;
    // private executeInt_double5(state_0__: number, frameValue: VirtualFrame, leftNodeValue_: number): number;
    // private executeInt_generic6(state_0__: number, frameValue: VirtualFrame, leftNodeValue_: number): number;
    // private executeInt_int4(state_0__: number, frameValue: VirtualFrame, leftNodeValue_: number): number;
    executeObject(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double_double2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
}
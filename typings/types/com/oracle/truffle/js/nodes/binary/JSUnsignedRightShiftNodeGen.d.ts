import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSUnsignedRightShiftNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSUnsignedRightShiftNode.d.ts'
import type { JSUnsignedRightShiftNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSUnsignedRightShiftNodeGen$GenericData.d.ts'
import type { JSToUInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSUnsignedRightShiftNodeGen extends JSUnsignedRightShiftNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSUnsignedRightShiftNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private generic_cache: JSUnsignedRightShiftNodeGen$GenericData;
    // private lvalToUint32Node: JSToUInt32Node;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private rvalToUint32Node: JSToUInt32Node;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(leftNodeValue: Object, rightNodeValue: Object): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeDouble(frameValue: VirtualFrame): number;
    // private executeDouble_double_double6(state_0__: number, frameValue: VirtualFrame): number;
    // private executeDouble_double_int5(state_0__: number, frameValue: VirtualFrame): number;
    // private executeDouble_generic7(state_0__: number, frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double_double3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_double_int1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic4(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_double2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToInt32Node$JSToInt32UnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node$JSToInt32UnaryNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToInt32NodeGen$JSToInt32UnaryNodeGen extends JSToInt32Node$JSToInt32UnaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramoperand: JavaScriptNode, parambitwiseOr: boolean): JSToInt32Node$JSToInt32UnaryNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode, bitwiseOr: boolean)
    // private foreignObject_toPrimitiveNode_: JSToPrimitiveNode;
    // private jSObject_toDoubleNode_: JSToDoubleNode;
    // private overloadedOperator_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    // private string_stringToNumberNode_: JSStringToNumberNode;
    // private toInt32Node: JSToInt32Node;
    // private executeAndSpecialize(operandNodeValue: Object): number;
    executeInt(frameValue: VirtualFrame): number;
    // private executeInt_boolean1(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_double2(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_generic3(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int0(state_0__: number, frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
}
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IfNode } from '../../../../../../com/oracle/truffle/js/nodes/control/IfNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IfNodeGen extends IfNode {
    static EMPTY: Object;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcondition: JavaScriptNode, paramthenPart: JavaScriptNode, paramelsePart: JavaScriptNode): IfNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(condition: JavaScriptNode, thenPart: JavaScriptNode, elsePart: JavaScriptNode)
    // private conditionProfile_field0_: number;
    // private conditionProfile_field1_: number;
    // private state_0_: number;
    // private toBooleanNode_field1_: Node;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(frameValue: VirtualFrame, conditionValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic1(state_0__: number, frameValue: VirtualFrame): Object;
}
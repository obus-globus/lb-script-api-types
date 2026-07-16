import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSToObjectNode$JSToObjectWrapperNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode$JSToObjectWrapperNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToObjectNodeGen$JSToObjectWrapperNodeGen extends JSToObjectNode$JSToObjectWrapperNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramoperand: JavaScriptNode): JSToObjectNode$JSToObjectWrapperNode;
    static createToObject(paramchild: JavaScriptNode): JSToObjectNode$JSToObjectWrapperNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private state_0_: number;
    // private toObjectNode_: JSToObjectNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}
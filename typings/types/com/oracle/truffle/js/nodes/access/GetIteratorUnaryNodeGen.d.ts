import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorUnaryNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class GetIteratorUnaryNodeGen extends GetIteratorUnaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramobjectNode: JavaScriptNode): GetIteratorUnaryNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(objectNode: JavaScriptNode)
    // private getIteratorNode__field1_: Node;
    // private getIteratorNode__field2_: Node;
    // private getIteratorNode__field3_: Node;
    // private getIteratorNode__field4_: Node;
    // private getIteratorNode__field5_: Node;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): IteratorRecord;
    executeVoid(frameValue: VirtualFrame): void;
}
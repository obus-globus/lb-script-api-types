import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetAsyncIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetAsyncIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetAsyncIteratorNodeGen extends GetAsyncIteratorNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(): GetAsyncIteratorNode;
    static create(paramobjectNode: JavaScriptNode): GetAsyncIteratorNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(objectNode: JavaScriptNode)
    // private createAsyncFromSyncIteratorNode__field1_: Node;
    // private getAsyncIteratorMethodNode_: GetMethodNode;
    // private getIteratorFromMethodNode__field1_: Node;
    // private getIteratorFromMethodNode__field2_: Node;
    // private getIteratorFromMethodNode__field3_: Node;
    // private getIteratorFromMethodNode__field4_: Node;
    // private getIteratorNode__field1_: Node;
    // private getIteratorNode__field2_: Node;
    // private getIteratorNode__field3_: Node;
    // private getIteratorNode__field4_: Node;
    // private getIteratorNode__field5_: Node;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): IteratorRecord;
    execute(objectNodeValue: Object): IteratorRecord;
    // private executeAndSpecialize(objectNodeValue: Object): IteratorRecord;
    executeVoid(frameValue: VirtualFrame): void;
}
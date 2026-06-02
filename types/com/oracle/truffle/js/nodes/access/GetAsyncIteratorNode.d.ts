import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateAsyncFromSyncIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateAsyncFromSyncIteratorNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { GetIteratorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class GetAsyncIteratorNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(): GetAsyncIteratorNode;
    static create(paramiteratedObject: JavaScriptNode): GetAsyncIteratorNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(objectNode: JavaScriptNode)
    // private objectNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doGetIterator(iteratedObject: Object, getIteratorNode: GetIteratorNode, getIteratorFromMethodNode: GetIteratorFromMethodNode, getAsyncIteratorMethodNode: GetMethodNode, createAsyncFromSyncIteratorNode: CreateAsyncFromSyncIteratorNode, asyncToSync: InlinedConditionProfile): IteratorRecord;
    execute(frame: VirtualFrame): IteratorRecord;
    execute(iteratedObject: Object): IteratorRecord;
}
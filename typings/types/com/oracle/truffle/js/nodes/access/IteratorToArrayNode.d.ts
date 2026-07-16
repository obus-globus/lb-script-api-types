import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorGetNextValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorGetNextValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IteratorToArrayNode extends JavaScriptNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, paramiterator: JavaScriptNode): IteratorToArrayNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, iteratorNode: JavaScriptNode, iteratorStepNode: IteratorGetNextValueNode)
    // private capacity: number;
    // private context: JSContext;
    // private first: boolean;
    // private iteratorNode: JavaScriptNode;
    // private iteratorStepNode: IteratorGetNextValueNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doDoneIterator(iteratorRecord: IteratorRecord): Object;
    doIterator(frame: VirtualFrame, iteratorRecord: IteratorRecord, firstGrowProfile: InlinedBranchProfile, growProfile: InlinedBranchProfile): Object;
    execute(frame: VirtualFrame, iteratorRecord: IteratorRecord): Object;
}
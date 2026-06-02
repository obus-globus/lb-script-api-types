import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IteratorStepNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IterableToListNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(iterator: IteratorRecord): SimpleArrayList<Object>;
    iterableToList(iterator: IteratorRecord, iteratorStepNode: IteratorStepNode, getIteratorValueNode: IteratorValueNode, growProfile: InlinedBranchProfile): SimpleArrayList<Object>;
}
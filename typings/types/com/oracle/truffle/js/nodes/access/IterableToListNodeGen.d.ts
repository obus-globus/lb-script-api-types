import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IterableToListNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IterableToListNode.d.ts'
import type { IteratorStepNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IterableToListNodeGen extends IterableToListNode {
    static create(): IterableToListNode;
    static getUncached(): IterableToListNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getIteratorValueNode_: IteratorValueNode;
    // private iteratorStepNode_: IteratorStepNode;
    // private state_0_: number;
    execute(arg0Value: IteratorRecord): SimpleArrayList<Object>;
    // private executeAndSpecialize(arg0Value: IteratorRecord): SimpleArrayList<Object>;
}
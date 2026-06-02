import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { IteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorStepNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorStepNodeGen extends IteratorStepNode {
    static create(): IteratorStepNode;
    static getUncached(): IteratorStepNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private iteratorCompleteNode_: IteratorCompleteNode;
    // private iteratorNextNode_: IteratorNextNode;
    // private state_0_: number;
    execute(arg0Value: IteratorRecord): Object;
    // private executeAndSpecialize(arg0Value: IteratorRecord): Object;
}
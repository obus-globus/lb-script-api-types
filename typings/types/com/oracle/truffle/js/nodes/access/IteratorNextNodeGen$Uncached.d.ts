import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorNextNodeGen$Uncached extends IteratorNextNode implements UnadoptableNode {
    static create(): IteratorNextNode;
    static getUncached(): IteratorNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(iteratorRecord: IteratorRecord): Object;
    execute(iteratorRecord: IteratorRecord, value: Object): Object;
    execute(arg0Value: IteratorRecord, arg1Value: Object, arg2Value: boolean): Object;
}
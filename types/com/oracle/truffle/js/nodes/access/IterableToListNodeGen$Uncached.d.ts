import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IterableToListNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IterableToListNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { SimpleArrayList } from '../../../../../../com/oracle/truffle/js/runtime/util/SimpleArrayList.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IterableToListNodeGen$Uncached extends IterableToListNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: IteratorRecord): SimpleArrayList<Object>;
}
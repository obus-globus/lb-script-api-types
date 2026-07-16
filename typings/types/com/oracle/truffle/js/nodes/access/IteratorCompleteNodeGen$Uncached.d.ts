import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorCompleteNodeGen$Uncached extends IteratorCompleteNode implements UnadoptableNode {
    static create(): IteratorCompleteNode;
    static getUncached(): IteratorCompleteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): boolean;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IteratorCompleteNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorCompleteNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorCompleteNodeGen extends IteratorCompleteNode {
    static create(): IteratorCompleteNode;
    static getUncached(): IteratorCompleteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getDoneNode_: PropertyGetNode;
    // private state_0_: number;
    // private toBooleanNode__field1_: Node;
    execute(arg0Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: Object): boolean;
}
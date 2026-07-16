import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsObjectNodeGen$Uncached extends IsObjectNode implements UnadoptableNode {
    static create(): IsObjectNode;
    static getUncached(): IsObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeBoolean(arg0Value: Object): boolean;
}
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsCallableNodeGen$Uncached extends IsCallableNode implements UnadoptableNode {
    static create(): IsCallableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeBoolean(arg0Value: Object): boolean;
}
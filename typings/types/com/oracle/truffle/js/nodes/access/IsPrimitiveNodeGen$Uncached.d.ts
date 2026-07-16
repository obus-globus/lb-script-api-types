import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { IsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsPrimitiveNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsPrimitiveNodeGen$Uncached extends IsPrimitiveNode implements UnadoptableNode {
    static create(): IsPrimitiveNode;
    static getUncached(): IsPrimitiveNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeBoolean(arg0Value: Object): boolean;
}
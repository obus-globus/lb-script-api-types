import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSToObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToObjectNodeGen$Uncached extends JSToObjectNode implements UnadoptableNode {
    static create(): JSToObjectNode;
    static getUncached(): JSToObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): Object;
}
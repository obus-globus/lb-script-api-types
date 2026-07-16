import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ImportValueNodeGen$Uncached extends ImportValueNode implements UnadoptableNode {
    static create(): ImportValueNode;
    static getUncached(): ImportValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeWithTarget(arg0Value: Object): Object;
}
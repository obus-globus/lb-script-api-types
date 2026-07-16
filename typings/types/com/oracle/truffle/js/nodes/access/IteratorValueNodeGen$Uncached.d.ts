import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorValueNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorValueNodeGen$Uncached extends IteratorValueNode implements UnadoptableNode {
    static create(paramiterResult: JavaScriptNode): JavaScriptNode;
    static create(): IteratorValueNode;
    static getUncached(): IteratorValueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): Object;
}
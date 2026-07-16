import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToBooleanNodeGen$Uncached extends JSToBooleanNode implements UnadoptableNode {
    static create(): JSToBooleanNode;
    static getUncached(): JSToBooleanNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeBoolean(arg0Value: Node, arg1Value: Object): boolean;
    executeBoolean(value: Object): boolean;
}
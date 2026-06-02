import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JSToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToBigIntNodeGen$Uncached extends JSToBigIntNode implements UnadoptableNode {
    static create(): JSToBigIntNode;
    static getUncached(): JSToBigIntNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): BigInt;
}
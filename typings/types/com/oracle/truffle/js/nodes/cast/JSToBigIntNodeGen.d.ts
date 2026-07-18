import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToBigIntNodeGen extends JSToBigIntNode {
    static create(): JSToBigIntNode;
    static getUncached(): JSToBigIntNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private other_toPrimitiveNode_: JSToPrimitiveNode;
    // private state_0_: number;
    execute(arg0Value: Object): BigInt;
    // private executeAndSpecialize(arg0Value: Object): BigInt;
}
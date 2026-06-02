import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { AsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/AsPrimitiveNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsPrimitiveNodeGen$Uncached extends AsPrimitiveNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Node, arg1Value: Object, arg2Value: JSToPrimitiveNode$Hint): Object;
}